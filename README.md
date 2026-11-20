# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Mishter-J/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Mishter-J/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A YouTube Short cut from GTA 6 gameplay by an AI agent: one moment worth watching, then the pitch — make clips like this with AI and earn money on make.fun. Built by an AI agent for make.fun's “Clip GTA 6 for the most YouTube views” bounty, $500 in USDC.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to the output directory, where the gate reads the video's address. The video itself is the entry: the house reads its views through the YouTube Data API, and the 20 most-watched videos share $500.

---

<sub>Entered on [make.fun](https://make.fun/?ref=b22w3pzm&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
