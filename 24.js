//Q.24 数値型から文字型へ、文字型から数値型へ（toString, Number or parseFloat)
//文字列 '10'をNumber型にし、型判定し、数値かどうか評価後、文字列に変換してください

//文字列
const ten = '10'
console.log(typeof ten)

//Number()を使用して数値型に変換
const numberTen = Number(ten)
console.log(typeof numberTen)

//ちなみに数値型なので演算できるか確かめる
const eleven = numberTen + 1
console.log(eleven)

//ただし、Number()の場合は数字以外を含む文字列だとNaNを返す
//parseFloatを使用すると数字だけを返すのでNaNにならない
const ten2 = '10ten'
const parseTen = parseFloat(ten2)
console.log(typeof parseTen)
console.log(parseTen)



//数値型から文字型へ（toString）
const stringTen = numberTen.toString()
console.log(typeof stringTen)

