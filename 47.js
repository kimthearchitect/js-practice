//Q.47 オブジェクトの中の指定した要素で配列を作る
//array = [
// {name: 'kenji', mail:'fafa@eee.com'},
// {name: 'morita', mail: 'kkk@faf.com'}
// ]
// 配列内にある連想配列のkeyとmail値を配列に格納して出力してください


array = [
  { name: 'kenji', mail: 'fafa@eee.com' },
  { name: 'morita', mail: 'kkk@faf.com' }
]

const arr = []
array.forEach((ele) => {
  //for-inで配列の要素を取り出す
  for (let key in ele)
    //配列の要素がmailなら新しく作った配列に格納する
    if (key === 'mail') {
      arr.push(ele[key])
    }
})
console.log(arr)
