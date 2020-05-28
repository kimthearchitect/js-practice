//Q.34 slice()を使用したコピー
//var arr = [3,4,5];をconcat以外で新たな配列としてarr2にコピーしてください。その後arr2[0]= 123を代入するとarrは何を出力するか答えなさい

var arr = [3, 4, 5]
//slice()を使用してarrをコピーした配列をarr2として作成
var arr2 = arr.slice()
console.log(arr2)
//[3, 4, 5]

arr2[0] = 123
console.log(arr)
//要素をコピーしているのでarrは[3, 4, 5]になる
console.log(arr2)
//[ 123, 4, 5 ]
