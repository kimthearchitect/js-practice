//Q.15 配列の要素の置き換え（splice）
// 配列 const array = ['a1','a2','a3','a4','a5'] の0〜2番目の要素をそれぞれ red, green, yellowに置き換えて配列にしてください。また実行した際の返り値を教えてください

const array = ['a1', 'a2', 'a3', 'a4', 'a5']

//spliceの使用
array.splice(0, 2, 'red', 'green', 'yellow')
console.log(array)
