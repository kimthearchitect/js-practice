//Q.14 引数を配列で返す方法（Array.from）
//fun(1,2,3)を実行したら引数が全て配列で返る関数funを定義しなさい

function fun() {
  return Array.from(arguments)
}

function fun2(...arg) {
  return Array.from(arg)
}


console.log(fun(1, 2, 3))
console.log(fun2(1, 2, 3))
