//Q.41 spliceを使用した要素の変更
//配列['a', 'b', 'c', 'd', 'e'] のインデックス2番目に'morita'という要素を加えなさい。期待する結果['a', 'b','morita', 'c', 'd', 'e']

//spliceの使用
const arr = ['a', 'b', 'c', 'd', 'e']
arr.splice(2, 0, 'morita')
console.log(arr)


