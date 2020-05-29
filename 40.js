//Q.40 イテレーターを使用して要素を一つずつ出力する方法
//var arr = ['f', 'o', 'x', 'k'];イテレーターを使い順番に出力してください


//配列自体がイテラブルなオブジェクト
var arr = ['f', 'o', 'x', 'k']
const arr2 = arr[Symbol.iterator]()

console.log(arr2.next().value)//f
console.log(arr2.next().value)//o
console.log(arr2.next().value)//x
console.log(arr2.next().value)//k

//entriesを使用して配列のキーと値をセットにして取り出す
var arrEntries = ['f', 'o', 'x', 'k']
const arr3 = arrEntries.entries()[Symbol.iterator]()

console.log(arr3.next().value)//[ 0, 'f' ]
console.log(arr3.next().value)//[ 1, 'o' ]
console.log(arr3.next().value)//[ 2, 'x' ]
console.log(arr3.next().value)//[ 3, 'k' ]


//文字列もイテラブルなオブジェクト
const test = "test"
const testExports = test[Symbol.iterator]()
for (const j of testExports)
  console.log(j)

