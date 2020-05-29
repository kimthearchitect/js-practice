//Q.6 変数が定義されていない場合のif文の実行（typeof）

//1
// if (typeof x === 'undefined') {
//   ???
//  }

//  //2
//  if(x === undefined){
//   ???
//  }

//変数xが定義されていない場合上の1、2は実行されますか?

console.log(typeof x)
//undefinedになる
if (typeof x === 'undefined') {
  console.log('true')
}
//よって１はtrueなので実行される

console.log(x)
if (x === 'undefined') {
  console.log('true')
}
//2はxがundefinedだが、文字列になっていなのでif分はエラーになるので実行されない
