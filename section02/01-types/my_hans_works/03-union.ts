// Union types

function combine1(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges1 = combine1(23, 48);
console.log(combinedAges1);

const combinedNames1 = combine1("Max", "Anna");
console.log(combinedNames1);
