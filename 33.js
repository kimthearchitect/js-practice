//Q.33 関数の引数（arguments）の取得方法とソート
//実引数の数を出力、第一引数を出力する関数fを実行してください

function f() {
  console.log(arguments.length)
  console.log(arguments[0])
}

f('test', 'test2')


//let arr = ['2','23','0','16']を小さい順にソートしてください。その後ソートをできないようにread-onlyにしてください

let arr = ['2', '23', '0', '16']
arr.sort((a, b) => a - b)
console.log(arr)
Object.freeze(arr)

//凍結させたのでread-onlyとなる
arr.sort()
console.log(arr)
