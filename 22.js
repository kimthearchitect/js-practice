//Q.22
// let array = ['e','a','k','B','c'];
// array.sort();
// を実行した結果を答えてください


let array = ['e', 'a', 'k', 'B', 'c'];
array.sort();


// [ 'B', 'a', 'c', 'e', 'k' ]となる
console.log(array)

//仮にアルファベット順に並べたいのであれば
//https://goma.pw/article/2015-11-18-0/
//比較関数を使用する必要がある

let array2 = ['e', 'a', 'k', 'B', 'c'];

array2.sort(function (a, b) {
  //toLowerCase()で文字列をすべて小文字に変換する
  a = a.toLowerCase()
  b = b.toLowerCase()
  if (b > a) {
    return -1
  } else if (b < a) {
    return 1
  }
  return 0
}
)

// [ 'a', 'B', 'c', 'e', 'k' ]となる
console.log(array2)
