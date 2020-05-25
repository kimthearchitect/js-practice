//Q.21
//浅いコピー(shallow copy)と深いコピー(deep copy)の違いを説明してください

//shallow copyの場合は、同じデータを参照している。deep copyの場合はオブジェクトも値としてコピーする


//Objectでシャローコピーをすると、元々のオブジェクトの値が変更される
//assignを使用したコピー
const score = { key: 1, next: { jp: 7, en: 3 } }
const copyScore = Object.assign({}, score)
copyScore.key = 2
copyScore.next.jp = 10

//1階層目は問題なし
console.log(score.key)
console.log(copyScore.key)
//２階層目は問題あり
console.log(score.next.jp)
console.log(copyScore.next.jp)
