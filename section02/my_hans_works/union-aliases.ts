type Combinable = number | string;
type Conversionable = "as-number" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: Conversionable
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
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString;
  // }
}

const combinedAges = combine(60, 43, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("60", "43", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Bad", "Max", "as-string");
console.log(combinedNames);
