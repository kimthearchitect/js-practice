//Q.48 everyメソッドで配列の全ての要素をテストする
//配列var passed = [12, 5, 8, 130, 44]の要素全てが10以上かどうかを評価してtrueかfalseを返してください。また10以上のものが一つでもあった場合trueを返してください。


//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//everyメソッドで配列の全ての要素をテストする

var passed = [12, 5, 8, 130, 44]

function test(i) {
  return i >= 10
}

console.log(passed.every(test))
