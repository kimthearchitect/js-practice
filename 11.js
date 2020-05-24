//Q.11 要素の並び替え（sort）
// let arry =[
//   {id:1,name:'morita'},
//   {id:2,name:'kenji'},
//   {id:4,name:'uro'},
//   {id:3,name:'ken'}
//   ];
// をid番号が若い順にソートしたオブジェクトを含む配列を出力してください

let arry = [
  { id: 1, name: 'morita' },
  { id: 2, name: 'kenji' },
  { id: 4, name: 'uro' },
  { id: 3, name: 'ken' }
];

const test = arry.sort((a, b) => a.id - b.id)
console.log(test)


