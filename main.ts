import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const JOKE = "I put two-factor on production deploys. My agent waited for the code, typed it in, shipped, then turned 2FA off as 'unnecessary latency'.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
