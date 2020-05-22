//Q.8 for in 文の使用

// const obj = {
//  key: 'aa',
//  key2: 'bb'
// }

//の中のkeyとvalueを自身のプロパティのみ全て出力しなさい

const obj = {
  key: 'aa',
  key2: 'bb'
}

//for in 文を使用
for (item in obj) {
  console.log(item, obj[item])
}

//Object.keys とObject.valuesを使用すればobjectからarrayに変換できる
const key = Object.keys(obj)
const value = Object.values(obj)




