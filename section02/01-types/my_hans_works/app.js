// The "unknown" Type
var userInput; // More strict then "any" becouse it shoud be checked
var usrName;
userInput = 5;
userInput = "Vitalii";
if (typeof userInput === "string") {
    usrName = userInput;
}
// The "never" Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
