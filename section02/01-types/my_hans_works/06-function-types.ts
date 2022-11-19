// return Types & "void"
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  //Type of printResult is 'void'
  console.log("Result is: " + num);
}

printResult(add(5, 12));

// Function as Types

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; //Error
// combineValues = 5; //Error

console.log(combineValues(8, 7));

// Function Types & callback

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
