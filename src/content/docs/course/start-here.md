---
title: Start here
description: What this course is, how to read it, and the color code used in every diagram.
---

I wrote this course to learn how the KICK firmware works before the hardware ships, and I'm publishing it so you can do the same. I also plan to share what I learn about customizing it.

## What this is

The KICK source code is public. This course explains it in plain language without skipping the hard parts: interrupts, real-time audio rules, lock-free queues, device trees, cross-compiling. If a topic is hard, I explain it with an analogy first and then show the real mechanism in the code.

Every technical claim points at a file and line in the upstream repository, pinned to commit `27194180` of [MusicTribeOpenSource/0700-AAM](https://github.com/MusicTribeOpenSource/0700-AAM). If a claim hasn't been checked on a real unit, it carries this badge: <span class="not-verified">Not verified on hardware</span>. The hardware isn't out yet, so most claims start there.

## One color per layer

Each part of the system has one color, and the color means the same thing everywhere.

| Color | Layer | What lives here |
|---|---|---|
| <span class="layer layer-hardware">Hardware</span> | Chips and board | SoC, control-surface MCU, codec, touch, pads |
| <span class="layer layer-bootloader">Bootloader</span> | Startup | ROM, SPL, U-Boot |
| <span class="layer layer-kernel">Kernel</span> | Linux | Drivers, ALSA, device tree |
| <span class="layer layer-userspace">User space</span> | Programs | systemd services, the KICK app |
| <span class="layer layer-message">Message thread</span> | App thread | UI and most engine calls (JUCE) |
| <span class="layer layer-audio">Audio thread</span> | Real-time thread | Rendering sound, no waiting allowed |
| <span class="layer layer-storage">Storage</span> | Memory that stays | eMMC, SD card |

In diagrams, a solid line is data, a dashed line is control, and a dotted line is a clock.

## What is not in the public release

Some pieces are missing from the open-source drop: the control-surface MCU firmware, any camera and gesture code, the factory samples, and a few build modules. I say so wherever it matters, so you never have to guess whether a diagram shows something you can read.

## Unofficial

This is not made by or endorsed by MUSIC Tribe. Behringer and KICK are trademarks of MUSIC Tribe. Course text and images are CC BY-SA 4.0. Code excerpts remain under their original licenses (AGPL-3.0-or-later for the Music Tribe code).
