let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; // Error
if (typeof userInput === 'string') {
  userName = userInput;
} // Type guard
