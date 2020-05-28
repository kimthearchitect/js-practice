//Q.30 Object.crateとObject.prototypeの使用
// let obj = {x : 2, y: 3} と等価をObjectメソッドで生成してください

let obj = { x: 2, y: 3 }

let obj2 = Object.create(Object.prototype, {
  x: { value: 2 },
  y: { value: 3 }
})

//この状態ではプロパティが列挙されない
console.log(obj2)

//enumerableの初期値がfalseなのでtrueに変更すると列挙される
let obj3 = Object.create(Object.prototype, {
  x: { value: 2, enumerable: true },
  y: { value: 3, enumerable: true }
})
console.log(obj3)

//代入演算子が使えない...
obj3.x = 5
console.log(obj3)

//writableの初期値がfalseなのでtrueにすると代入演算子で変更可能に
let obj4 = Object.create(Object.prototype, {
  x: { value: 2, enumerable: true, writable: true },
  y: { value: 3, enumerable: true, writable: true }
})
obj4.x = 5
console.log(obj4)

//この状態だとプロパティを削除することができない
delete obj4.x
console.log(obj4)

//configurableを使用するとプロパティの削除可能に
let obj5 = Object.create(Object.prototype, {
  x: { value: 2, enumerable: true, writable: true, configurable: true },
  y: { value: 3, enumerable: true, writable: true, configurable: true }
})
delete obj5.x
console.log(obj5)

//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
