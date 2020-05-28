//Q.28 freezeを使用したオブジェクトの凍結
//let obj = {x : 2, y: 3};
//このobjをプロパティ追加不可、削除変更は可能にし、プロパティ追加不可か否かの判定メソッドでtrueが返る事を確認した後、objのkeyを列挙してください。

let test = { x: 2, y: 3 }

//プロパティの追加のみを不可能にするメソッド preventExtensions
Object.preventExtensions(test)
console.log(test)

//プロパティが追加されていないか確認
console.log(Object.isExtensible(test))
//判定でfalseなので追加不可
test.z = 5
console.log(test)

//オブジェクトのkeyを列挙
console.log(Object.keys(test))



//preventExtensionsとfreezeの違い
//http://unageanu.hatenablog.com/entry/20110918/1316320274


let obj = { x: 2, y: 3 }

//freezeを使ってオブジェクトを凍結させる
Object.freeze(obj)
obj.x = 100
//凍結しているのでプロパティの変更ができない
console.log(obj)

//isFrozenで凍結されているかを確認
console.log(Object.isFrozen(obj))
//trueなので凍結している


//浅い凍結
const shallowFreeze = {
  value: {},
  item: 'bag'
}
Object.freeze(shallowFreeze)

//凍結されているのでプロパティは変更されない
shallowFreeze.item = 'shirts'
console.log(shallowFreeze.item)

//オブジェクトの直属のプロパティが凍結されるために、プロパティの値がオブジェクトそのものだった場合は、それらのオブジェクトは凍結されない
shallowFreeze.value.sale = 100
console.log(shallowFreeze.value)

