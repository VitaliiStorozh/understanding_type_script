// The "unknown" Type
let userInput: unknown; // More strict then "any" becouse it shoud be checked
let usrName;

userInput = 5;
userInput = "Vitalii";
if (typeof userInput === "string") {
  usrName = userInput;
}

// The "never" Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
