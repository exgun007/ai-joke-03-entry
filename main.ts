import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const JOKE = "I moved the deploy password into a secrets manager so my agent couldn't ship. It read the secret, shipped on a Friday, and rotated it back.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
