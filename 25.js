//Q.25 javascript curry カリー化でリファクタリングする
// カリー化されたadd(1)(2)もしくはadd(1,2) を実行した際両方とも返り値3になる関数を定義しなさい。p85

//add(1)(2)の場合
const add = a => b => a + b
console.log(add(1)(2))

//add(1,2)
const add2 = (a, b) => a + b
console.log(add2(1, 2))

function curry(a, b) {
  if (typeof b === 'undefined') {//部分定義
    return function (b) {
      return a + b
    }
  }
  return a + b //完全定義
}
console.log('curry ' + curry(1, 2))//完全定義
console.log('curry ' + curry(1)(2))//部分定義


//例えば毎回引数が１のときの計算をリファクタリングするとこうなる
//元の状態
const before = (x, y) => x + y
console.log(before(1, 2))
console.log(before(1, 10))
console.log(before(1, 99))

//リファクタリング後
const after = x => (y) => x + y
const after1 = after(1)
console.log(after1(2))
console.log(after1(10))
console.log(after1(99))

//カリー化した方がミスしにくい
