// Verifies every <CodeRef path line expect> against the pinned upstream commit.
// Usage: UPSTREAM=/path/to/0700-AAM node scripts/check-citations.mjs
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SHA = '27194180ce5fbab3776ebce53e2d4b016597364e';
const upstream = process.env.UPSTREAM;
if (!upstream) {
	console.error('Set UPSTREAM to a local checkout of MusicTribeOpenSource/0700-AAM.');
	process.exit(2);
}

function walk(dir) {
	return readdirSync(dir).flatMap((name) => {
		const p = join(dir, name);
		return statSync(p).isDirectory() ? walk(p) : [p];
	});
}

const files = walk('src/content/docs').filter((f) => /\.mdx?$/.test(f));
const tag = /<CodeRef\b([^>]*?)>/gs;
const attr = (s, name) => {
	const m = s.match(new RegExp(`${name}=(?:"([^"]*)"|\\{\`([^\`]*)\`\\}|\\{(\\d+)\\})`));
	return m ? (m[1] ?? m[2] ?? m[3]) : undefined;
};

let checked = 0;
const failures = [];
const blobCache = new Map();

for (const file of files) {
	const text = readFileSync(file, 'utf8');
	for (const m of text.matchAll(tag)) {
		const path = attr(m[1], 'path');
		const line = Number(attr(m[1], 'line'));
		const expect = attr(m[1], 'expect');
		checked++;
		if (!path || !line || !expect) {
			failures.push(`${file}: CodeRef missing path, line or expect: ${m[0].slice(0, 80)}`);
			continue;
		}
		let lines = blobCache.get(path);
		if (!lines) {
			try {
				lines = execFileSync('git', ['-C', upstream, 'show', `${SHA}:${path}`], {
					encoding: 'utf8',
					maxBuffer: 64 * 1024 * 1024,
				}).split('\n');
			} catch {
				failures.push(`${file}: ${path} does not exist at ${SHA.slice(0, 8)}`);
				continue;
			}
			blobCache.set(path, lines);
		}
		if (line > lines.length) {
			failures.push(`${file}: ${path}:${line} is past end of file (${lines.length} lines)`);
		} else if (!lines[line - 1].includes(expect)) {
			failures.push(`${file}: ${path}:${line} does not contain "${expect}" (found "${lines[line - 1].trim()}")`);
		}
	}
}

console.log(`Checked ${checked} citations in ${files.length} files.`);
if (failures.length) {
	console.error(failures.join('\n'));
	process.exit(1);
}
