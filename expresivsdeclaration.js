// contoh function declaration
function tampilPesan(nama) {
  alert("halo " + nama);
}

tampilPesan("Irfan ganteng");

// kelebihan function declaration
// 1 lebih fleksibel dan 2 mudah di pahami

// function expresi kelebihannya:
//1. lebih powerfull karena 1. sebagai closure, 2. bisa menjadi argument function lain dan ke 3 IIFE (standar javascript terbaru)
//function expresion harus di simpan di dalam variabel

let tampilPesan = function (nama) {
  alert("halo " + nama);
};

tampilPesan("irfan lucu");
