//Q.49 getメソッド
//[['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']];の'two'の値を取得してください

const arr = [['one', 'info@fa'], ['two', 'send@fafa'], ['three', 'hoso@fafa']]
const myMap = new Map(arr)
const two = myMap.get('two')
console.log(two)

