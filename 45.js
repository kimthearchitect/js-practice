//Q.45 someを使用したループ処理
//こちらは要素が2だったらループを抜けたいのだが期待どうり動かない 期待する出力 //0, 1
//[0, 1, 2, 3, 4].forEach(function(val, i) {
//   if (val === 2) {
//     // how do we stop?
//     return true;
//   }
//   console.log(val);
// });
// 0, 1, 3, 4

//期待通りになるようにしてください

//forEachをsomeに変える
[0, 1, 2, 3, 4].some(function (val, i) {
  if (val === 2) {
    // how do we stop?
    return true;
  }
  console.log(val);
});

//forループを使う方法
const test = [0, 1, 2, 3, 4]
for (let i = 0; i < test.length; i++) {
  if (i < 2) {
    console.log(i)
  }
}



