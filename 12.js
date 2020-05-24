//Q.12 変数への代入
//a, bの変数はデフォルトとしてaは5、bは7を持ち、aに1を代入してconsole出力してください。

//array方式
const [a = 5, b = 7] = [1]
console.log(a, b)

//object方式
const { c = 5, d = 7 } = { c: 1 }
console.log(c, d) 
