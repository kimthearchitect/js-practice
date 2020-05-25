//Q.17 arrayの要素を文字列にして再度配列にする方法（join & split）
// const array = ['a1','a2','a3','a4','a5']
// の全ての要素を"/"で結合した文字列を出力し、さらにその文字列を'/'区切りで配列に直してください

const array = ['a1', 'a2', 'a3', 'a4', 'a5']
console.log(array)
const newArray = array.join('/').split('/')
console.log(newArray)

const joinTest = array.join('/')
console.log(joinTest)

const splitTest = joinTest.split('/')
console.log(splitTest)
