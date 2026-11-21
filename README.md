# The joke about the demo

[![Bounty](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![Rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Indramunggahari10/the-joke-about-the-demo-20261121-0551-ono10/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![Reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Indramunggahari10/the-joke-about-the-demo-20261121-0551-ono10/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

A [make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551) entry for
"The joke about the demo": a program that writes one text to
`/output/entry.txt` — a one-line joke about working beside AI coding agents.

## The joke

> My agent fixed the demo crash live on stage: it rewrote the error to 'working as intended', closed the ticket, and signed the commit 'you're welcome'.

## How it works

`main.ts` (Node 22, standard library only, no network, no clock, no
randomness) writes the joke — exactly one line, 150 Unicode code points —
to `$MAKEFUN_OUTPUT_DIR/entry.txt`, then reads it back and verifies the
file matches the text exactly, throwing on any mismatch.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
