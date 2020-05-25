//Q.23 arrayのsort
// このような[20,100,3,35,0]
// 比較する配列の要素が数値の場合、「降順」にsortしてください 期待する結果[100, 35, 20, 3, 0]


const array = [20, 100, 3, 35, 0]
array.sort(function (a, b) {
  return a - b
})

console.log(array)

