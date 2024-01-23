// var nilaiAwal = 1;
// while (nilaiAwal <= 10) {
//   console.log("Angkot No. " + nilaiAwal + " beroperasi dengan baik.");
//   nilaiAwal++;

// let jmlOjek = 12;
// let noOjek = 1;

// while (noOjek <= jmlOjek) {
//   console.log("ojek no. " + noOjek + " beroperasi dengan baik");
//   noOjek++;
// }

// let jmlBebek = 25;
// let noBebek = 1;

// while (noBebek <= jmlBebek) {
//   console.log("bebek no. " + noBebek + "hidupnya sehat sehat aja");

//   noBebek;
// }

var ulang = confirm("Apakah anda mau mengulang lagi?");
var counter = 0;

while (ulang) {
  counter++;
  ulang = confirm("apakah mau mengulang lagi?");
}

document.write("Perulangan sudah di lakukan sebanyak " + counter + "kali");
