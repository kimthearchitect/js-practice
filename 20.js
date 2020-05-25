//Q.20 newでインスタンスを作新たに成して、fuctionでthisを使う
// コンストラクタWhoの初期化時に'morita'(String)を渡しインスタンスプロパティnameに代入、 インスタンスメソッドgetNameの返り値がWho.prototype.name値になるいわゆる「classのようなもの」を作成してください ※インスタンスメソッドはprototypeに代入してください


function Who(name) {
  this.name = name;
};
Who.prototype.getName = function () {
  console.log('Myname is ' + this.name);
};
let o = new Who('morita');
o.getName()


