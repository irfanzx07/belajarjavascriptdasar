// cara penulisan array

let mhs = ["irfan", "dika", "rizal", "rahmat", "ririn"];
console.log(mhs.length);
console.log(mhs[3]);
console.log(typeof mhs);

let makanan = ["mie ayam", "bakso", "indomie", "somay"];
console.log(makanan.length);
console.log(makanan[3]);

// array di dalam array dengan menggunakan function expresion

let myfunc = function () {
  alert("Hello Moto");
};
let myArr = ["teks", 2, false, myfunc, [4, 5, 6]];
console.log(myArr[4][1]);
