//Q.49 getメソッド
//[['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']];の'two'の値を取得してください

const fafa = [['one', 'info@fa'], ['two', 'send@fafa'], ['three', 'hoso@fafa']]
const myMap = new Map(fafa)
const two = myMap.get('two')
console.log(two)

