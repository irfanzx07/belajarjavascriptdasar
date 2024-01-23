// 1.splice
let hewan = ["ikan", "ayam", "bebek", "burung"];
hewan.splice(2, 0, "sapi");
console.log(hewan.join(" - "));

hewan.splice(1, 2, "kepiting", "angsa");
console.log(hewan.join(" - "));

//2.slice
let hewan1 = ["ikan", "ayam", "bebek", "burung"];
let hewan2 = hewan1.slice(1, 3);
console.log(hewan2.join(" - "));
console.log(hewan1.join(" - "));

//3. foreach
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
angka.forEach(function (e) {
  console.log(e);
});

//atau bisa menggunakan function yang lain

let angka1 = [2, 4, 8, 10, 12];

let cetak = function (a) {
  console.log(a);
};
angka.forEach(cetak);

//foreach dengan index
let nama = ["rosa", "firman", "reza"];
nama.forEach(function (c, i) {
  console.log("mahasiswa ke- " + i + " adalah : " + c);
});

//4.map
let angka3 = [1, 2, 3, 4, 5, 6, 7];
let angka4 = angka3.map(function (e) {
  return e * 2;
});
console.log(angka4.join(" - "));

//4. sort
let angka6 = [6, 9, 10, 8, 0, 2, 5];
angka6.sort(function (a, b) {
  return a - b;
});
console.log(angka6.join(" - "));

//5. filter
//mengembalikan banyak array
let angka7 = [6, 9, 10, 8, 0, 2, 5];
let angka8 = angka.filter(function (x) {
  return x > 7;
});
console.log(angka8);

//6. find
//mengembalikan isi array hanya 1
let angka9 = [6, 9, 10, 8, 0, 2, 5];
let angka10 = angka.find(function (x) {
  return x > 7;
});
console.log(angka10);
