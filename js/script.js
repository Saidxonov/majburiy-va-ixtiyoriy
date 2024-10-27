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
