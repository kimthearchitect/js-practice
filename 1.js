//Q.1 オブジェクトをマージする方法
//const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
const a = { a: 'a' }
const b = { b: 'b' }

//浅いマージ（shallow）
const c = Object.assign(a, b)
console.log(c)

//浅いマージ（スプレッド構文）
const c2 = { ...a, ...b }
console.log(c2)

//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


//同じプロパティを持つオブジェクトのマージ
const e = { a: 'a' }
const f = { a: 'c', b: 'b' }
const g = { b: 'e', c: 'o' }
const ceo = Object.assign({}, e, f, g)
console.log(ceo)
console.log(ceo.a + ceo.b + ceo.c)
