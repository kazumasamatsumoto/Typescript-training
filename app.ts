// Union

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text",
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(20, 24, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("20", "24", "as-number");
console.log(combinedStringAges);

const sample1 = combine("test", "kazumasa", "as-text");
console.log(sample1);
