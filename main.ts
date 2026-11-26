import { mkdirSync, writeFileSync } from "node:fs";

// One original funny line, written for make.fun's
// "Make the Judge Laugh in One Line" bounty.
// Setup: the printer finally works. Flip: the only thing it
// will print is the message saying it can't print.
const line =
  "My printer works now, but it only prints the message saying it can't print.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
