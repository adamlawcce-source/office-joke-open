import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the setup is a calendar blocking focus time, the
// punchline pays it off with the manager booking that very hour to ask why
// there is never any focus time — the protection itself is the thing that
// gets eaten. Specific office detail (calendar focus block), a fresh circular
// turn that lands in the last few words, one sentence, clear on first read.
const TEXT =
  "My calendar blocked an hour for focus time, then my manager booked it to ask why I never have focus time.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters on a single
// line. Fail loudly instead of writing an invalid entry if the text is ever
// edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry text must be a single line");
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
