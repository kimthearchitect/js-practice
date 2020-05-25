//問13 スコープ問題（クロージャー、レキシカルスコープ）
//next()を実行しただけ返り値が1増える関数を定義してください

const setup = function () {
  let count = 0;
  return function () {
    return (count += 1);
  }
}
const next = setup()
console.log(next())
console.log(next())
console.log(next())
console.log(next())
