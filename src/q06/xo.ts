const rawInput = process.argv[2];

const isInvalid =
  rawInput === undefined ||
  rawInput.trim() === "" ||
  Number.isNaN(Number(rawInput)) ||
  !Number.isInteger(Number(rawInput)) ||
  Number(rawInput) < 1;

if (isInvalid) {
  console.log("Invalid Input");
} else {
  const size = Number(rawInput);
  const rows: string[] = [];

  if (size === 1) {
    rows.push("x");
  } else {
    const border = "x".repeat(size);
    const middle = "x" + "o".repeat(size - 2) + "x";

    rows.push(border);
    for (let i = 0; i < size - 2; i += 1) {
      rows.push(middle);
    }
    rows.push(border);
  }

  console.log(rows.join("\n"));
}
