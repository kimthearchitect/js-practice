//Q.32 Object.definePropertyを使用してプロパティを明示的に追加
// こちら var obj2 = {x : 2};にObjectメソッドを用いてプロパティy、値2、プロパティ追加可能を定義して、Objectメソッドで情報(値と属性)を返してくださいP149


var obj2 = { x: 2 }

//明示的にプロパティを追加
var obj2 = Object.defineProperty(obj2, 'y', { value: 2, enumerable: true, writable: true })
console.log(obj2)
console.log(Object.getOwnPropertyDescriptor(obj2, 'y'))
//{ value: 2, writable: true, enumerable: true, configurable: false }

obj2.y += 5
console.log(obj2)


//属性をすべてtrueで良いのなら
var obj3 = { x: 2 }
obj3.y = 2
console.log(obj3)
console.log(Object.getOwnPropertyDescriptor(obj3, 'y'))
//{ value: 2, writable: true, enumerable: true, configurable: true }
