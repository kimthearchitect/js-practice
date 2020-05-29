//Q.5 arrayかどうかを確認する方法（Array.isArray）
//任意の変数名の[1,2]を定義して配列かどうかを評価してください
//e.g true

const twoElementsArray = [1, 2]
//jsの場合はtypeofにarrayがないのでobjectになる
console.log(typeof twoElementsArray)
//arrayか確認したい場合はisArrayを使う
console.log(Array.isArray(twoElementsArray))
