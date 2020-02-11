let square = (a) => a * a;

let n = 2;
console.log(square(n));

let display = (name) => {
  console.log("inside arrow function", name);
  //   return "hello";
};

let greeting = display("abhi");

console.log(greeting);

let sayHi = () => alert("Hello!");
