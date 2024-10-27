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

//? 14. **Stringni qabul qilib, u bilan boshlanadigan va tugaydigan belgini olib tashlaydigan funksiyani yozing.**
// let str = "pHello, World!";

// function deleteFirstAndLastWord(arg) {
//     let res = arg.slice(1, -1);
//     return res;
// }
// console.log(deleteFirstAndLastWord(str));

//? 15. **Berilgan massivdagi barcha raqamlarning kvadratlari yig'indisini hisoblaydigan funksiyani yozing.**
// let arr = [1, 2, 3, 4, 5];
// let res = [];
// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//     res.push(arr[i] ** 2);
// }
// for (let i = 0; i <= res.length - 1; i++) {
//     sum += res[i];
// }
// console.log(sum);

//? 16. **Massivni teskari qilib qaytaruvchi funksiyani yozing (bunda massiv ichidagi elementlar teskari tartibda joylashadi).**
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function reverseMassiv(arg) {
//     let res = arg.slice().reverse();
//     return res;
// }
// console.log(reverseMassiv(numbers));

//? 17. **Stringni qabul qilib, uni har bir so‘zini katta harflarda yozib qaytaradigan funksiyani yozing.**
// let userStr = prompt("iSmingizni kiriting");
// function bigStr(arg) {
//     let res = arg.toUpperCase();
//     return res;
// }
// console.log(bigStr(userStr));

//? 18. **Obyektlar massividan berilgan yoshdan kattalarni ajratib qaytaradigan funksiyani yozing.**
// let users = [
//     { name: "John", age: 25 },
//     { name: "Saidburxon", age: 14 },
//     { name: "Sardor", age: 16 },
//     { name: "Aziz", age: 18 },
//     { name: "Kala", age: 100 },
//     { name: "Hitler", age: 138 },
// ];

// function filterUsers(arg, age) {
//     let res = arg.filter((user) => user.age > age);
//     return res;
// }
// console.log(filterUsers(users, 16));

//? 19. **Massiv ichida nechta marta berilgan element uchrashganini aniqlovchi funksiyani yozing.**
// let numbers = [ 6, 3, 10, 9, 9, 42, 1, ];
// let element = 3;
// let counter = 0;
// for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] === element) {
//         counter++;
//     }
// }
// console.log(counter);

//? 20. **Ikki string qabul qilib, ularning umumiy harflarini ajratib qaytaradigan funksiyani yozing.**
// function ajratilganLetters(str1, str2) {
//     let str1Letters = str1.split("").sort().join("");
//     let str2Letters = str2.split("").sort().join("");
//     let commonLetters = "";
//     for (let i = 0; i < str1Letters.length; i++) {
//         if (str2Letters.includes(str1Letters[i])) {
//             commonLetters += str1Letters[i];
//         }
//     }
//     return commonLetters;
// }
// console.log(ajratilganLetters("hello", "world"));

//!------------------------------> Ixtiyoriy masalalar <----------------------

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("cardContainer");

  const solutions = [
    {
      title: "Massivdagi Harflar Uzunligi Sonini Aniqlash",
      code: `let str = ["salom", "hayr", "qalaysiz"];
    let res = str.map(function(value) {
      return value.length;
    });
    console.log(res);`,
      result: eval(`(function() {
            let str = ["salom", "hayr", "qalaysiz"];
            let res = str.map(function(value) {
              return value.length;
            });
            return JSON.stringify(res);
          })()`),
    },
    {
      title: "Stringdagi Bo'sh Joylarni O'chirish",
      code: `let userStr = "Salom dunyo";
    let res = userStr.replace(/ /g, "");
    console.log(res);`,
      result: eval(`(function() {
            let userStr = "Salom dunyo";
            let res = userStr.replace(/ /g, "");
            return res;
          })()`),
    },
    {
      title: "Eng Kichik va Eng Katta Qiymatni Aniqlash",
      code: `let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let res = {
      min: Math.min(...arr),
      max: Math.max(...arr)
    };
    console.log(res);`,
      result: eval(`(function() {
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let res = {
              min: Math.min(...arr),
              max: Math.max(...arr)
            };
            return JSON.stringify(res);
          })()`),
    },
    {
      title: "Massiv Elementlariga 2 Qo'shish",
      code: `let arr = [-1, 0, 1, 2, 3, 4, 5];
    let res = arr.map(value => value + 2);
    console.log(res);`,
      result: eval(`(function() {
            let arr = [-1, 0, 1, 2, 3, 4, 5];
            let res = arr.map(value => value + 2);
            return JSON.stringify(res);
          })()`),
    },
    {
      title: "Eng Uzun So'zni Topish",
      code: `let arr = ["Salom", "dunyo", "javascript", "programmalogiya"];
    let longestWord = "";
    arr.forEach(value => {
      if (value.length > longestWord.length) {
        longestWord = value;
      }
    });
    console.log(longestWord);`,
      result: eval(`(function() {
            let arr = ["Salom", "dunyo", "javascript", "programmalogiya"];
            let longestWord = "";
            arr.forEach(value => {
              if (value.length > longestWord.length) {
                longestWord = value;
              }
            });
            return longestWord;
          })()`),
    },
    {
      title: "Obyektlar Massividan Yosh Bo‘yicha Filtrlash",
      code: `let users = [
      { name: "John", age: 25 },
      { name: "Saidburxon", age: 14 },
      { name: "Sardor", age: 16 }
    ];
    function filterUsers(arg, age) {
      return arg.filter(user => user.age > age);
    }
    console.log(filterUsers(users, 16));`,
      result: eval(`(function() {
            let users = [
              { name: "John", age: 25 },
              { name: "Saidburxon", age: 14 },
              { name: "Sardor", age: 16 }
            ];
            function filterUsers(arg, age) {
              return arg.filter(user => user.age > age);
            }
            return JSON.stringify(filterUsers(users, 16), null, 2);
          })()`),
    },
    {
      title: "Ortacha Sondan Katta Qiymatlar",
      code: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
function findBirBalo(arg) {
    for (let i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    let average = sum / arg.length;
    let res = [];
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] > average) {
            res.push(arg[i]);
        }
    }
    return res;
}
console.log(findBirBalo(numbers));`,
    },
    {
      title: "Massivning O'rtacha Sonidan Katta Qiymatlar",
      code: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let sum = 0;
      function findBirBalo(arg) {
          for (let i = 0; i < arg.length; i++) {
              sum += arg[i];
          }
          let average = sum / arg.length;
          let res = [];
          for (let i = 0; i < arg.length; i++) {
              if (arg[i] > average) {
                  res.push(arg[i]);
              }
          }
          return res;
      }
      console.log(findBirBalo(numbers));`,
      result: eval(`(function() {
            let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let sum = 0;
            function findBirBalo(arg) {
                for (let i = 0; i < arg.length; i++) {
                    sum += arg[i];
                }
                let average = sum / arg.length;
                let res = [];
                for (let i = 0; i < arg.length; i++) {
                    if (arg[i] > average) {
                        res.push(arg[i]);
                    }
                }
                return res;
            }
            return JSON.stringify(findBirBalo(numbers));
        })()`),
    },
    {
      title: "Stringdagi 1-chi va oxirgi harflarni olib tashlash",
      code: `let str = "pHello, World!";
      
      function deleteFirstAndLastWord(arg) {
          let res = arg.slice(1, -1);
          return res;
      }
      console.log(deleteFirstAndLastWord(str));`,
      result: eval(`(function() {
            let str = "pHello, World!";
            function deleteFirstAndLastWord(arg) {
                let res = arg.slice(1, -1);
                return res;
            }
            return deleteFirstAndLastWord(str);
        })()`),
    },
    {
      title: "Qiymatlarning kvadratining yig'indisi",
      code: `let arr = [1, 2, 3, 4, 5];
      let res = [];
      let sum = 0;
      for (let i = 0; i <= arr.length - 1; i++) {
          res.push(arr[i] ** 2);
      }
      for (let i = 0; i <= res.length - 1; i++) {
          sum += res[i];
      }
      console.log(sum);`,
      result: eval(`(function() {
            let arr = [1, 2, 3, 4, 5];
            let res = [];
            let sum = 0;
            for (let i = 0; i <= arr.length - 1; i++) {
                res.push(arr[i] ** 2);
            }
            for (let i = 0; i <= res.length - 1; i++) {
                sum += res[i];
            }
            return sum;
        })()`),
    },
    {
      title: "Massivni teskari qilib qaytarish",
      code: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      
      function reverseMassiv(arg) {
          let res = arg.slice().reverse();
          return res;
      }
      console.log(reverseMassiv(numbers));`,
      result: eval(`(function() {
            let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      
            function reverseMassiv(arg) {
                let res = arg.slice().reverse();
                return res;
            }
            return reverseMassiv(numbers);
        })()`),
    },
    {
      title: "So'zni katta harflarga otkazish",
      code: `let userStr = prompt("iSmingizni kiriting");
        
      function bigStr(arg) {
          let res = arg.toUpperCase();
          return res;
      }
      console.log(bigStr(userStr));`,
      result: eval(`(function() {
            let userStr = "salom dunyo"; // Misol uchun, foydalanuvchidan olingan string.
      
            function bigStr(arg) {
                let res = arg.toUpperCase();
                return res;
            }
            return bigStr(userStr);
        })()`),
    },
    {
      title: "2 stringlarda ham bor harflarni chiqarish",
      code: `function ajratilganLetters(str1, str2) {
          let str1Letters = str1.split("").sort().join("");
          let str2Letters = str2.split("").sort().join("");
          let commonLetters = "";
          for (let i = 0; i < str1Letters.length; i++) {
              if (str2Letters.includes(str1Letters[i])) {
                  commonLetters += str1Letters[i];
              }
          }
          return commonLetters;
      }
      console.log(ajratilganLetters("hello", "world"));`,
      result: eval(`(function() {
            function ajratilganLetters(str1, str2) {
                let str1Letters = str1.split("").sort().join("");
                let str2Letters = str2.split("").sort().join("");
                let commonLetters = "";
                for (let i = 0; i < str1Letters.length; i++) {
                    if (str2Letters.includes(str1Letters[i])) {
                        commonLetters += str1Letters[i];
                    }
                }
                return commonLetters;
            }
            return ajratilganLetters("hello", "world");
        })()`),
    },

    // Yana qo'shimcha 10 masalani shu tarzda qo'shishingiz mumkin.
  ];

  solutions.forEach((solution) => {
    cardContainer.innerHTML += `
          <div class="card">
            <div class="card-code">
              <h3>${solution.title}</h3>
              <pre>${solution.code}</pre>
            </div>
            <div class="card-result">
              <h3>Natija</h3>
              <pre>${solution.result}</pre>
            </div>
          </div>
        `;
  });
});
