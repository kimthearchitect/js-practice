//Q.10 delete
//x = 43
// let y = 3
// の2つの変数。deleteできるのはどちらですか？


x = 43
let y = 3

console.log(x)

//deleteしてみた
//x
const x2 = delete x
console.log(x2)

//y
console.log(y)
const y2 = delete y
console.log(y2)

//結果は１がdeleteできた。暗黙に定義されたグローバル関数はdeleteできるが、letやvarなどの変数やfunction内の変数には使用できない


