# Art direction for course illustrations

Used for every Higgsfield image in the KICK Firmware Course. Diagrams are never generated: they are built from boxes, lines and live text so labels and wiring stay correct.

## What the images are for

One hero image per module and an occasional analogy illustration. They set mood and give the reader a visual anchor. They never carry facts.

## Look

- Matte near-black warm ground, like a hardware panel. Soft key light from the top left.
- Flat vector-like shapes with fine film grain. Shallow depth, generous negative space.
- One hero subject per image, abstract or metaphorical (glowing pads, a relay baton, layers).
- A single glowing accent taken from the layer color that matches the module topic. Everything else stays neutral.

## Seeds

The three approved style references are in `design/art/seeds/`:

| File | Subject | Accent layer |
|---|---|---|
| `seed1-pads-teal.png` | Pad grid and a hand | User space (teal) |
| `seed2-relay-amber.png` | Relay baton handoff | Bootloader (amber) |
| `seed3-stack-violet.png` | Floating layers with a waveform | Audio thread (violet) |

The stack seed is glassier than the other two and carries a neon waveform. Treat glow and translucency as allowed for the accent element only. A matte alternative is kept in `design/art/originals/seed3-stack-violet-v2.png`.

Attach all three as `image_references` on every new generation.

## Locked prompt prefix

```
Editorial illustration for an embedded audio hardware course. Matte near-black warm
background, soft top-left light, flat vector-like shapes with fine film grain,
generous negative space, one glowing accent color. Abstract and metaphorical.
No text, no letters, no numbers, no logos, no brand marks, no real product likeness.
```

Then add the subject, the accent hue name (hardware red, bootloader amber, kernel green, user space teal, message thread blue, audio thread violet, storage pink), and the aspect ratio.

## Settings

- Model: `gpt_image_2_5`.
- Heroes 16:9. Analogy illustrations 1:1.
- Generate 2 variants, keep the best, and keep originals in `design/art/originals/`.
- Every image ships with alt text that describes the idea, not the pixels.

## Hard rules

- No Behringer or Music Tribe logos, marks, or product likeness.
- No text inside images, ever. Image models misspell, and a wrong label teaches the wrong thing.
- The accent color matches the topic's layer color so the reader learns the palette.

## Licensing

CC BY-SA 4.0, same as the course prose. Note the generating tool in each image's metadata.
