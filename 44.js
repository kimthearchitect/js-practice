//Q.44 toStringで文字列に変換し、forループで新しいarrayにcharAtでインデックス順に格納
//1234という数字を文字列に変更後、配列の要素としてインデックス順に格納してください

const num = 1234
//数値型を確認
console.log(typeof num)

//文字型へ変換
const str = num.toString()
//文字型になっているか確認
console.log(typeof str)

//新しい配列を作成
str2 = []
//forループで処理
for (let i = 0; i < str.length; i++) {
  //charAtで文字の位置を指定。今回の場合はインデックス順に指定して新しい配列に格納する。
  str2[i] = str.charAt(i)
}
console.log(str2)


