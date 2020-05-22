//Q.7 undifinedの使い方（if文）

//1
// let x;
// if (x === void 0) {
//   console.log('right')
// }

//2
// 直前まで y は宣言されていない
// if (y === void 0) {
// }

//1,2はそれぞれ実行されますか

//1
let x;
console.log(x)
console.log(void 0)
//xとvoid 0はどちらもundefinedだからtrueとなるので実行される
if (x === void 0) {
  console.log('able')
}

//2 
if (y === void 0) {
  console.log('unable')
}
//宣言されていないから実行されない
