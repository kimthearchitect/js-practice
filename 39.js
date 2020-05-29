//Q.39 for of や forEachを使用して配列から要素を出力
//配列var arr = ['f','o','x','k'];をインデックス順に出力させてください

var arr = ['f', 'o', 'x', 'k']

//for of
for (var j of arr) {
  console.log(j)
}

arr.map(item => console.log(item))
arr.forEach(item => console.log(item))


