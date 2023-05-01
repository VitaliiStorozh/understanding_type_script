const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Vit',
  age: 37,
};

const copiedPerson = { ...person };
console.log(person, copiedPerson);

const add = (...numbers: number[]) =>
  numbers.reduce((curResult, curValue) => curResult + curValue, 0);

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1, hobby2, hobbies);

const { firstName: userName, age } = person;
console.log(userName, age, person);
