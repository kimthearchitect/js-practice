//Q.35 throw new を使用した例外処理（エラー処理）
//こちらは2つのパラメーターを足して返すgetSum関数です。
// const getSum = (a, b) => a + b
// このパラメーターに何もわたってこなかった場合Errorをスローすようにしてください 期待する結果 getSum(10) //throws b is not defined getSum(undefined, 10) //throws a is not defined

const _err = function (message) {
  throw new Error(message)
}
const getSum = (a = _err('a is not defined'), b = _err('b is not defined')) => a + b

getSum(10)
//b is not defined

getSum(undefined, 10)
//a is not defined


getSum(10, 20)
//30
