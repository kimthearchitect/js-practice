//Q50 Map set
//問49の変数fafaにインデックス3番目の要素として['four',fafa@eee]の配列を追加してください

const fafa = [['one', 'info@fa'], ['two', 'send@fafa'], ['three', 'hoso@fafa']]

//Map setで要素を追加
const fafa2 = new Map(fafa)
fafa2.set('four', 'fafa@eee')

console.log(fafa2)

