// manipulasi array

// 1. menambah isi array
let arr = ["a", 1, true];
console.log(arr);

// atau dengan cara
let arr1 = [];
arr1[0] = " Rahmat";
arr1[1] = "Dewi";
arr1[2] = "Fernandes";
arr1[3] = "Mario";

console.log(arr1);

// menghapus isi array
let mhs = ["Mario", "Galih", "Jaka", "Usup"];
mhs[2] = undefined;
console.log(mhs);

// menampilkan isi array
let namaMinuman = ["teh", "kopi", "susu", "jus mangga", "es jeruk"];

for (let i = 0; i < namaMinuman.length; i++) {
  console.log("daftar nama minuman ke- " + (i + 1) + " : " + namaMinuman[i]);
}

// method pada array
// 1.join

let nama = ["galih", "fikri", "wawan", "yayan"];
console.log(nama.join(" - "));

// 2. push // memasukan data array baru
let nama1 = ["galih", "fikri", "yayan"];
nama1.push("zakaria", "santi");
console.log(nama1.join(" , "));

// 3. pop/ menghapus/ data terahkir
let nama2 = ["galih", "fikri", "yayan"];
nama1.pop();
console.log(nama2.join(" , "));

//4. unshift
let nama3 = ["galih", "fikri", "yayan"];
nama3.unshift("irfan");
console.log(nama3.join(" , "));

//5.shift
let nama4 = ["galih", "fikri", "yayan"];
nama4.shift();
console.log(nama4.join(" , "));
