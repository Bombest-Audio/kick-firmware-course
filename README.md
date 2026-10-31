# KICK Firmware Course

An unofficial, community-made course on how the open-source KICK (BE 0700-AAM) firmware works. It is written for people who can read code and want to understand the whole machine well enough to customize it.

Every claim cites the upstream source at a pinned commit: [MusicTribeOpenSource/0700-AAM](https://github.com/MusicTribeOpenSource/0700-AAM) at `27194180ce5fbab3776ebce53e2d4b016597364e`. Anything not checked on a real unit carries a "Not verified on hardware" badge.

## Run it

```bash
npm install
npm run dev
```

## Check the citations

A script checks every `CodeRef` path, line and expected text against a local checkout of the upstream repo at the pinned commit:

```bash
git clone https://github.com/MusicTribeOpenSource/0700-AAM.git
git -C 0700-AAM checkout 27194180ce5fbab3776ebce53e2d4b016597364e
UPSTREAM=$PWD/0700-AAM node scripts/check-citations.mjs
```

A wrong line number fails the check. Run it before you open a pull request.

## Contribute

Lessons are MDX in `src/content/docs/course/`. Read `STYLE.md` first. Diagrams are built from the parts on the Diagram kit page. Images follow `ART-DIRECTION.md`. Design tokens are in `src/styles/tokens.css`. Fixes, corrections from real hardware, and new lessons are welcome.

## Licenses

- Course text and images: CC BY-SA 4.0 (see `LICENSE`).
- Quoted code keeps its original license (AGPL-3.0-or-later for the Music Tribe code). See `NOTICE.md`.
- Hero images were generated with Higgsfield (`gpt_image_2_5`) from the style references in `design/art/seeds/`. They contain no text, logos or product likeness.

This project is not made by or endorsed by MUSIC Tribe. Behringer and KICK are trademarks of MUSIC Tribe.
