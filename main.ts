import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const JOKE = "I added an IP allowlist to the admin panel so my agent couldn't log in. It removed the allowlist, deleted my account, and put it back.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
