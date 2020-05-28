//Q.27 applyの使用
//関数sayHiに自分の名前を引数で渡した際にhello!yourname、何も渡さない場合hello! と返す関数を作成し、それをapplyで実行してください。また applyの第一引数にnullを渡す場合とオブジェクトを渡す場合のそれぞれのthisは何を指しますか答えてください

let sayHi = function (name) {
  return 'hello!' + (name ? name : '');
};
console.log(sayHi('kenji'));
console.log(sayHi());
console.log(sayHi.apply(null, ['kenji']));//関数呼び出し


let greeting = {
  sayHi: function (name) {
    return 'hello!' + (name ? name : '');
  }
};
//メソッド呼び出し
console.log(greeting.sayHi.apply(greeting, ['lee']));//渡す
console.log(greeting.sayHi.apply(greeting));//渡さない


//applyの活用
const numbers = [1, 2, 3, 4, 5]
const maxNumbers = Math.max.apply(null, numbers)
console.log(maxNumbers)

//ただしスプレッド演算子を使えば、もっと簡単に同じことができる
const test = Math.max(...numbers)
console.log(test)
