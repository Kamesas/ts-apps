export const DIGIT_BUTTONS: Array<string> = Array(9)
  .fill(null)
  .map((_, i) => (i + 1).toString());

export const OPERATORS: Array<string> = [
  "+",
  "0",
  "*",
  "%",
  "-",
  ".",
  "/",
  "="
];

export const ADDITIONAL_OPERATORS: Array<string> = ["C", "Back"];
