// function jumlahVolumeDuaKubus(a, b) {
//   let volumeA;
//   let volumeB;
//   let total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }

// console.log(jumlahVolumeDuaKubus(8, 3));

// function tambah(a, b) {
//   return a + b;
// }

// //parseInt merubah nilai string menjadi bilangan/integer
// let a = parseInt(prompt("masukan nilai 1:"));
// let b = parseInt(prompt("masukan nilai 2: "));

// let hasil = tambah(a * 2, b * 3);
// console.log(hasil);

// function kurang(c, d) {
//   return c - d;
// }

function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

let coba = tambah(1, 2, 3, 4, 5, 7);
console.log(coba);

// hasilnya tidak terpengaruh dengan parameter yang kosong
