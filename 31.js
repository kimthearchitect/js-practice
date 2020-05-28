//Q.31 getOwnPropertyDescriptorでプロパティの正確な定義が見る
// onst obj = { x : 2} の属性を出力してください

const obj = { x: 2 }
console.log(Object.getOwnPropertyDescriptor(obj, 'x'))
//{ value: 2, writable: true, enumerable: true, configurable: true }

const obj2 = Object.create(Object.prototype, {
  x: { value: 2 }
})
console.log(obj2)
console.log(Object.getOwnPropertyDescriptor(obj2, 'x'))
//Q30同様に新しくオブジェクトを生成した場合でenumerableがfalseだと列挙されないが、実はvalueがあるオブジェクトだということが分かる



