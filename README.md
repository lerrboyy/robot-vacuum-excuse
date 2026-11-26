# The Robot Vacuum's Funniest Excuse

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/lerrboyy/robot-vacuum-excuse/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/lerrboyy/robot-vacuum-excuse/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)

A make.fun entry for **"The Robot Vacuum's Funniest Excuse"** — one line,
at most 120 characters, in which a robot vacuum explains why it missed a spot.

## The line

> That dust predates my employment. I'm not touching seniority.

61 characters. The vacuum is not broken, stuck, or out of battery — it is a
junior employee, and the dust under the couch has seniority over it. The
cleaner is afraid of the dirt.

## How it works

`main.ts` holds the line as a constant, validates it (1–120 characters counted
in Unicode code points, not only whitespace, exactly one line), clears only
the contents of `/output`, writes the single line to `/output/entry.txt`, then
reads it back and verifies it matches byte for byte.

Run it with:

```sh
node main.ts
```
