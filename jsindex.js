// let pencilPrice = 3;
// let penPrice = 5;
// let output = "You have paid :" + (penPrice + pencilPrice) + " Rupees";
// console.log(output)
// console.log(`You have paid ${a+b} rupees`)

//Conditional statements

// console.log("Before my if statement")
// let age = 8;
// if (age >= 18) {
//   console.log("You can drive")
//   let a = 5;
//   console.log(5*a)
// }
// console.log("After my if statement")

// if (age < 20) {
//   console.log("You are in your twenties")
// }

// let firstName = "Shradha"
// if (firstName = "Shradha") {
//   console.log(`Welcome ${firstName} to our course`)
// }

// String Methods
// let msg = "              ms  g              ";
// let password = prompt("Ser your password");
// let newPass = password.trim();
// console.log(password)

// Strings are immutable

// let str = "            Banglore            ";
// console.log(str);

// let st = str.trim();
// console.log(st);

// console.log(str);

// let college = "Apna College";
// console.log(college.toUpperCase());
// console.log(college.toLowerCase());

// // let msg = "ILoveCoding"
// console.log(msg.indexOf("Love"))
// console.log(msg.indexOf("love"))
// console.log(msg.indexOf("iLove"))

//Method Chaining

// let msg = "            hello           ";
// let newMsg = msg.trim()
// console.log("After trim :" + newMsg)
// newMsg = newMsg.toUpperCase();
// console.log("After uppercase :" + newMsg)

//Arrays

//let student1 = "Aman";
//let student2 = "Shradha";
//let student3 = "Rajat";

// let students = ["Aman", "Shradha", "Rajat"];
// let nums = [2, 4, 6, 8];

// let nums = [[1,2],[3,4],[5,6]]

//For Loops


// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }


// for (let i = 1; i <= 15; i = i + 2){
//   console.log(i)
// }

// //backwards

// for (let i = 15; i > 0; i = i - 2){
//   console.log(i)
// }

//Pring even numbers

// console.log("Even Numbers")

// for (let i = 2; i < 10; i = i + 2){
//   console.log(i)
// }

// console.log("Even Numbers in reverse order")

// for (let i = 10; i > 1; i = i - 2){
//   console.log(i)
// }

//Nested loops

// for (let i = 0; i < 3; i++){
//   console.log("Outer loop")
//   for (let j = 0; j < 3; j++){
//     // console.log("Inner Loop")
//     console.log(j)
//   }
// }

// // While Loop
// let i1 = 0;
// while (i < 15) {
//   console.log(i);
//   i++;
// }

// let i = 15;
// while (i > 0) {
//   console.log(i);
//   i--;
// }


// let fruits = ["mango", "banana", "orange", "grapes"];
// fruits.push("pineapple")

// for (let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }


// let arr = [1, 2, 3, 4, 5, 6];

// let print = function (el) {
//   console.log(el)
// }

// arr.forEach(function (el) {
//   console.log(el)

// });

// let arr3 = [1, 2, 3, 4, 5, 6,5];

// arr3.forEach((el) => {
//   console.log(el)
// })



// arr.forEach((el) => {
//   console.log(el.name)
// })

// let arr2 = arr.map((el) => {
//   // console.log(el.name)
//   return el;
// })


// let ageF = arr.map((el) => {
//   return el.age + 2;
// })

// let fil = arr.filter((el) => {
//   return el.name[0] == "a";
// })

// let ev = arr.every((el) => {
//   return el.name[0] == "a";
// })

// let red = arr.reduce((res, el) => {
//   return
// })

// let arr = [1, 2, 3, 44, 5, 6, 7];

// let max = -1;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

// let ans = arr.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else {
//     return max;
//    }
// })

// let obj = {
//   name: "shradha",
//   age: 21,
//   age2: 32,
//   nationality: "Indian",
//   avg() {
//     console.log(`${this.name} is ${this.age} years old and she is ${this.nationality}`)
//   }
// }

// const student = {
//   name: "Shradha",
//   age: 23,
//   eng: 96,
//   math: 93,
//   phy: 97,
//   getAvg() {
//     console.log(this)
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} got ${avg} marks`)
//   }
// }

// function getAvg() {
//   console.log(this)
// }


// console.log("Hellow")
// console.log("Hellow")
// try {
  
//   console.log(a)
// } catch (error) {
//   console.log(error);
// }
// console.log("Hellow")
// console.log("Hellow")
// console.log("Hellow")
// const sum = (a, b) => {
//   console.log(a + b)
// }

// sum(3, 4)


// const cube = (n) => {
//   return n * n * n;
// }

// const power = (a, b) => {
//   return a ** b;
// }

// const power = (a, b) => a ** b;


// console.log("Hii there!")

// setTimeout(() => {
//   console.log("Once again Hii!")
// }, 4000);

// console.log("Welocme")


// const id = setInterval(() => {
//   console.log("Namaste!!")
// }, 2000);


// setTimeout(() => {
  
//   clearInterval(id)
// }, 10000);