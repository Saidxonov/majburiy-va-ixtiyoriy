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

//? 6.misol
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

//? 7. **Foydalanuvchidan string qabul qilib, undagi bo‘sh joylarni olib tashlaydigan funksiyani yozing.**
// let userStr = prompt("String kiriting");
// let res = userStr.replace(/ /, "");
// console.log(res);

//? 8. **Obyektdagi barcha qiymatlarni massivga o‘tkazuvchi funksiyani yozing.**
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// let value = Object.values(obj);
// let res = [];
// res.push(value);
// console.log(res);

//? 9. **Berilgan massivdagi sonlarning eng kichigi va eng kattasini aniqlab, obyekt sifatida qaytaruvchi funksiyani yozing (masalan, `{min: 2, max: 10}`).**
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = {
//     min: Math.min(...arr),
//     max: Math.max(...arr),
// };
// console.log(res);

//? 10. **Berilgan stringda nechta unli harf borligini hisoblovchi funksiyani yozing.**
// let str = "Salom dunyo";
// let res = str.split("");
// let counter = 0;
// for (let i = 0; i <= res.length; i++) {
//     if (
//         res[i] == "a" ||
//         res[i] == "o" ||
//         res[i] == "u" ||
//         res[i] == "i" ||
//         res[i] == "e"
//     ) {
//         counter++;
//     }
// }
// console.log(counter);

//? 11. **Massivni qabul qilib, har bir elementiga 2 qo‘shadigan va qaytadigan funksiyani yozing.**
// let arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
// let res = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//     res.push(arr[i] + 2);
// }
// console.log(res);

//? 12. **Massiv ichida eng uzun so'zni aniqlab qaytaruvchi funksiyani yozing.**
// let arr = [
//     "Salom",
//     "dunyo",
//     "javascript",
//     "programmalogiya",
//     "gidroelektromexanizatsiyalashtirilmaganliklaridanmikan",
// ];
// let longestWord = "";
// arr.forEach(function(value) {
//     if (value.length > longestWord.length) {
//         longestWord = value;
//     }
// });
// console.log(longestWord);

//? 13. **Foydalanuvchidan massiv qabul qilib, uning ichidagi raqamlarni o‘rtacha qiymatidan katta bo‘lgan elementlarni ajratib qaytaruvchi funksiyani yozing.**
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// function findBirBalo(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         sum += arg[i];
//     }
//     let average = sum / arg.length;
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] > average) {
//             res.push(arg[i]);
//         }
//     }
//     return res;
// }
// console.log(findBirBalo(numbers));