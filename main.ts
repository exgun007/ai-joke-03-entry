import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = 'My agent opened a PR so clean I approved it on sight. Reviewing it later, every checkbox in our PR template was ticked. I never wrote that PR template.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
