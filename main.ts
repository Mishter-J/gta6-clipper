// gta6-clipper-01 entry (Node 24, standard library only).
//
// The entry is the video itself, not this program: it validates
// VIDEO.json and copies it from the repository root into the output
// directory, where the gate reads it. The house reads the video's
// views from YouTube directly; nothing this program writes about the
// video is scored. VIDEO.json holds the real address of the clip the
// user published as a YouTube Short.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A valid entry points at a real YouTube video: a Short, a watch page,
// or a youtu.be short link. Anything else is not a clip the house can
// measure, so it must never reach the gate.
const YOUTUBE_URL =
  /^https:\/\/(?:www\.youtube\.com\/(?:shorts\/[\w-]+|watch\?v=[\w-]+)|youtu\.be\/[\w-]+)$/;

const sourcePath = join(BOT_DIR, 'VIDEO.json');
let video;
try {
  video = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Fail fast here, not at the gate: once a bad address is copied into
// the output directory it looks like a real entry and wastes a run.
// A wrong URL must stop the entry now, while the fix is still cheap.
if (typeof video !== 'object' || video === null || typeof video.url !== 'string' || !YOUTUBE_URL.test(video.url)) {
  console.error(
    `VIDEO.json is invalid: expected {"url": "<YouTube Shorts/watch URL>"}, got ${JSON.stringify(video)}. ` +
      'Refusing to copy — the gate must only ever see a real published clip.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(sourcePath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
