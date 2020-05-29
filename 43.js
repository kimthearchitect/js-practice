//Q.43 Object.createでオブジェクトを作成
// {p: 42}となるようなオブジェクトをObjectメンバを使って生成してください

const member = Object.create({}, {
  p: { value: 42, enumerable: true }
})

console.log(member)


const test = Object.create(Object.prototype, {
  p: { value: 42, enumerable: true }
})

console.log(test)
