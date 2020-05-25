//Q.19 Object.createにvalueを与える
//Object.createで空のオブジェクトを作成し、値が1のプロパティpを出力してください

const test = Object.create({}, { p: { value: 1 } })
console.log(test.p)

//一度nullのオブジェクトを作成した後にdefinrPropertyを使用してvalueを設定する方法
const spring = Object.create(null)
console.log(spring)
const summer = Object.defineProperty(spring, "p", { value: 1 })
console.log(summer.p)
