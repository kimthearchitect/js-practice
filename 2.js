//Q.2 ある配列から新たな配列を返す
//const arry = ['aa','bb','cc','dd','ee','ff','gg'];のdd,ee,ffを新たな配列として返してください

const array = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg']
const newArray = array.slice(3, 6)
console.log(newArray)

//先頭の要素を取り出して新しい配列を作成
const firstElement = array.shift()
const firstArray = []
const newFirstArray = firstArray.concat(firstElement)
console.log(newFirstArray)

//配列から特定の要素を見つけ出して、新たな配列に格納する
const filterArray = array.filter(item => item === 'ee')
console.log(filterArray)


