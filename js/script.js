// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
// console.log(fibonacci(10));

// function strReplaceStar(arg) {
//   let res = arg;
//   if (res.includes("0")) {
//     res = res.replaceAll("0", "*");
//   }
//   return res;
// }

// console.log(strReplaceStar("sa0lom"));

// const kitoblar = [
//   { nom: "kitob A", muallif: "Saidburxon" },
//   { nom: "kitob b", muallif: "saidburxon" },
//   { nom: "kitob c", muallif: "saidburxon" },
// ];
// let res = [];
// kitoblar.forEach(function (value) {
//   value.muallif = "Alisher Navoiy";
// });
// console.log(kitoblar);

// const ism = [
//   { ism: "Jasur", yosh: 21 },
//   { ism: "Sardorbek", yosh: 22 },
//   { ism: "Azizbek", yosh: 20 },
// ];
// ism.forEach(function (value) {
//   value.ism = "Mr." + value.ism;
// });
// console.log(ism);

// const ism = [
//   { ism: "Jasur", yosh: 21, jinsi: "erkak" },
//   { ism: "Sardorbek", yosh: 22, jinsi: "erkak" },
//   { ism: "Azizbek", yosh: 20, jinsi: "erkak" },
//   { ism: "Aziza", yosh: 20, jinsi: "ayol" },
// ];
// ism.forEach(function (value) {
//   if (value.jinsi == "erkak") {
//     value.ism = "Mr." + value.ism;
//   } else {
//     value.ism = "Mrs." + value.ism;
//   }
// });
// console.log(ism);

//!---------------------------------> Majburiy masalalar <--------------------------------------

//? 1.misol
// let userName = prompt("Ismingizni kiriting");
// function bigStr() {
//   return userName[0].toUpperCase() + userName.slice(1);
// }
// console.log(bigStr());

//? 2.misol
// let userStr = prompt("Ismingizni kiriting!");
// let res = [];

// function reverseStr() {
//   res = userStr.split("").reverse().join("");
//   return res;
// }
// console.log(reverseStr());

//? 3.misol
// let numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// let res;
// let sum = 0;

// function ortachaQiymat(arg) {
//   for (let i = 0; i <= arg.length - 1; i++) {
//     sum += arg[i];
//   }
//   return sum / arg.length;
// }
// console.log(ortachaQiymat(numbers));

//? 4.misol
// let str = ["salom", "hayr", "qalaysiz"];
// let res = str.map(function (value) {
//   return value.length;
// });
// console.log(res);

//? 5.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = numbers.filter(function (value) {
//   return value % 2 === 1;
// });
// console.log(res);

//? 6. **Ikki obyektni qabul qilib, ularni birlashtiruvchi funksiyani yozing.**
// let obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// let obj2 = {
//   d: 4,
//   e: 5,
//   f: 6,
// };

// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }
// console.log(mergeObjects(obj1, obj2));
