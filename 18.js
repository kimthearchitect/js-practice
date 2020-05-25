//Q.18 ランダム出力（math.floor)
// 配列['おはよう','こんにちは','おやすみなさい']の要素がランダムに出力される関数を書いてください。(配列に要素が追加される事を仮定してたものにしてください)

const words = ['おはよう', 'こんにちは', 'おやすみなさい']

const shuffle = words[Math.floor(Math.random() * words.length)]
console.log(shuffle)
