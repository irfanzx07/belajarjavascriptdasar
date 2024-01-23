// var item = prompt("masukan nama makanan/minuman: \n (cth:nasi, daging,susu)");

// switch (item) {
//   case "nasi":
//     alert("makanan/minuman sehat");
//     break;
//   case "daging":
//     alert("makanan/minuman sehat");
//     break;
//   case "susu":
//     alert("minuman sehat");
//     break;
// default;

// }

let hewan = prompt(
  "masukan nama-nama hewan seperti: (cth: ayam, bebek, ikan, panci, dandang, penggorengan)"
);

switch (hewan) {
  case "ayam":
    alert("Ya, itu hewan di Indonesia");
  case "bebek":
    alert("ya, itu hewan di Indonesia");
  case "ikan":
    alert("ya, itu hewan di Indonesia");
    break;
  case "panci":
    alert("Tidak, itu bukan hewan di Indonesia");
  case "dandang":
    alert("Tidak, itu bukan hewan di Indonesia");
  case "penggorengan":
    alert("Tidak, itu bukan hewan di Indonesia");
    break;
  default:
    alert("semua yang di pilih salah, silahkan coba lagi !!! ");
    break;
}
