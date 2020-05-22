//Q.9 配列の中の要素の結合 (join)
//こちらの ['a', 'b', 'c'] 配列の中の全ての要素を結合し、1つの文字列として出力してください

const array = ['a', 'b', 'c']
const newArray = array.join('')
const newArray2 = array.join()

console.log(newArray)
//joinメソッドの引数である「separator」に「''」と空文字を入れているので「abc」と表示される

console.log(newArray2)
//a,b,cと表示されるので結合されているとは言えない
