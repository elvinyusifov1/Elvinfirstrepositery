// 3 elave et
// let ed = prompt("eded yazin");
// newArr = ed.split("")
// newArr.push('3')
// newArr.unshift('3');
// console.log(newArr.join(""));
// boyuk ededi tap
// let eded = prompt("eded yaziinn").split("");
// let theBiggest = 0;
// for (let index = 0; index < eded.length; index++) {
//   if (theBiggest < eded[index]) {
//     theBiggest = eded[index];
//   }
// }
// console.log(theBiggest);
// tam ededleri tap
// let eded = +prompt("eded");
// if(eded % 1 == 0){
//     console.log(true);
// }else{
// //     console.log(false);
// // }
// let eded = +prompt("eded");
// for (let index = 0; index < eded.length;  index ++ ) {
//      let counter = 0;
//       for (let j = 0; j < index.length; j++) {
//     if (index/j === 0) {
//         counter++
//     }
//     console.log(counter);
//       }
// }
// array =   ---------------------------------------------;
// let arr = [1, 2, 3, 4];
// let arrb = [1, 2, 3, 4, 5, 6, 7];
// let sayi = Math.abs(arr.length - arrb.length);
// for (let index = 0; index < sayi; index++) {
//   if (arr.length < arrb.length) {
//     arr.push("0");
//   } else {
//     arrb.push("0");
//   }
// }
// if (arr.length > arrb.length) {
//   console.log(arr.splice(arr.length - sayi, sayi).splice(""));
// } else {
//   console.log(arrb.splice(arrb.length - sayi, sayi).splice(""));
// }
// faktorial-------------------------------------------------------
// function factorial(n) {
//     let result = 1
// for (let index = 1; index <= n; index++) {
//        result *= index}
// return result}
// console.log(factorial(7));
// function factorial(n) {
//   let result = 1;
//   for (let index = 1; index <= n; index++) {
//     result *= index;
//   }
//   return result;
// }
// console.log(factorial(7));
// ulduzlu==========================================
// function ulduz(row) {
//     for (let index = 1; index <= row; index++) {
//         let str = " ";
//     for (let j = 1; j <= index; j++) {
//     str +="X"
//     }
//     console.log(str);
//     }
//     for (let i= row -1; i >= 1; i--) {
//         let str = " ";
//         for (let j = 1; j <= i; j++) {
//         str +="X"
//     }
//     console.log(str);
//     }
// }
// let row = 3
// ulduz(row)
//
// let sayi = +prompt("sayi yaz");

let src = "";
let sayi = 14

for (let i = 1; i <= sayi; i++) {
  for (let j = 1; j <= sayi; j++) {
    if (Math.abs(sayi / 2 - i) + Math.abs(sayi/2 - j) <= sayi/2) {
      src += "X";
    } else {
      src += " ";
    }
  }
  src += "\n";
}

console.log(src);

