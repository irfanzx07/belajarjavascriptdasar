// menangkap pilihan player
let p = prompt("pilih : gajah, semut, orang");
//menangkap pilihan computer

//membangkitkan bilangan random
let comp = Math.random();

if (comp < 0.34) {
  comp = "gajah";
} else if (comp >= 0.34 && comp < 0.67) {
  comp = "orang";
} else {
  comp = "semut";
}

let hasil = "";
// menentukan rules
if (p == comp) {
  hasil = "SERI";
} else if (p == "gajah") {
  if (comp == "orang") {
    hasil = "MENANG";
  }
}

//tampilkan hasilnya
