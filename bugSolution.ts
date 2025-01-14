function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(' ');
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane", "Doe"];
let user2 = "Jane Doe";

console.log(greeter(user)); // Correctly handles the array
console.log(greeter(user2)); // Correctly handles the string