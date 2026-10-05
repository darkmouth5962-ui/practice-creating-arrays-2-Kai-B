// Task 1

let helloArray = Array(7);
helloArray.fill("Hello");
console.log(helloArray);

// task 2

helloArray.fill("Hi", 3);
console.log(helloArray);

// Task 3

let forArray = Array(5);
for (let i = 0; i < forArray.length; i++) {
    forArray[i] = i*10
};
console.log(forArray);