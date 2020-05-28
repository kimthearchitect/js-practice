//Q.29 Objectメソッドで生成
//こちらlet obj = {} と等価をObjctメソッドで生成してください


let obj = Object.create(Object.prototype)
console.log(obj)


//これじゃダメなの？問題の意図がよく分からない
let obj2 = new Object()
console.log(obj2)
