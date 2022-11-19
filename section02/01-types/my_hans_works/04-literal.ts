// Literal types

function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-string" // string
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
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges2 = combine2(23, 48, "as-number");
console.log(combinedAges2);

const combinedStringAges2 = combine2("23", "48", "as-number");
console.log(combinedStringAges2);

const combinedNames2 = combine2("Max", "Anna", "as-string");
console.log(combinedNames2);
