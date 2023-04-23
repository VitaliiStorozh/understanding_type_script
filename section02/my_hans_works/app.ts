let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; // Error
if (typeof userInput === 'string') {
  userName = userInput;
} // Type guard

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
