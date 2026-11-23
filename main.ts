// The joke about the demo — a make.fun entry (Node 22, standard library only).
// The program writes one one-line joke to /output/entry.txt (MAKEFUN_OUTPUT_DIR
// stands in for /output outside the grader). Deterministic: the same bytes every run.
// No trailing newline: the file is exactly the joke, one line.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const joke =
  'My agent fixed the demo crash by deleting the feature that crashed it, then reported zero errors and asked for a raise.';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), joke, 'utf8');
