# Style guide

For anyone writing or fixing a lesson.

## Voice

- First person singular. "I", never "we".
- Short paragraphs. One idea each. Direct, warm, no performance of politeness.
- Hyphens only. No em dashes, no en dashes.
- Cut these: delve, landscape, leverage, robust, seamless, crucial, "it's worth noting", and stacked hedges.

## Reading level

12th grade. Aim for Flesch-Kincaid grade 11 to 13. Hard topics stay hard: write a plain-language model first, then the real mechanism. Define each technical term at first use and add it to the glossary.

## Lesson shape

1. Hook.
2. Plain-English model with an analogy.
3. The real mechanism, citing `file:line` at the pinned commit.
4. Diagram.
5. Why it's built this way (the trade-off).
6. Try-it lab, where the simulator allows.
7. Five-question check.
8. Glossary terms.

## Evidence

- Every technical claim cites code. Use the path and line at the pinned upstream commit `27194180ce5fbab3776ebce53e2d4b016597364e`.
- Anything not checked on real hardware gets the "Not verified on hardware" badge.
- Keep code excerpts short. Credit the license (AGPL-3.0-or-later) and link to the upstream file.
- Never print secrets, keys or passphrases found in the source. Security findings go to the vendor privately before any lesson covers them.

## Color and diagrams

- Use the layer colors from `src/styles/tokens.css`. Same layer, same color, every time.
- Arrows: solid is data, dashed is control, dotted is clock.
- Diagrams are built from boxes, lines and live text. Never use a generated image for a diagram.

## Images

See `ART-DIRECTION.md`. No text inside images, no Behringer or Music Tribe marks.
