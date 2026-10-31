// Upstream repo and the commit every citation is pinned to.
export const UPSTREAM_REPO = 'https://github.com/MusicTribeOpenSource/0700-AAM';
export const UPSTREAM_SHA = '27194180ce5fbab3776ebce53e2d4b016597364e';

export function permalink(path: string, line?: number): string {
	const anchor = line ? `#L${line}` : '';
	return `${UPSTREAM_REPO}/blob/${UPSTREAM_SHA}/${path.split(' ').join('%20')}${anchor}`;
}
