//! Constructor Tanımlaması
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;

  //* Bu fonksiyon her soruda tekrar tekrar oluşturulur. Onun yerine prototype'da tanımlamak daha mantıklıdır.
  // this.cevabiKontrolEt = function (cevap) {
  //   return cevap === this.dogruCevap;
  // };

  //console.log(this);
}

//* Prototype tanımlaması
Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Hangisi JS paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "TypeScript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Soru(
    "2-Hangisi .net paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Nuget", c: "Npm" },
    "b"
  ),
  new Soru(
    "3-Hangisi JS paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "TypeScript", c: "Npm" },
    "c"
  ),
  new Soru(
    "4-Hangisi .net paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Nuget", c: "Npm" },
    "b"
  ),
];
