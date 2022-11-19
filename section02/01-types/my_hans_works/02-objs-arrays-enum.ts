// Object type

// Enum type
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Vitalii",
  age: 30,
  // Array type
  hobbies: ["Sports", "Cooking"],
  // Tuple type
  // role: [2, "author"],

  // Enum type
  role: Role.AUTHOR,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
