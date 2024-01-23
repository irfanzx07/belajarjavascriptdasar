function cetakAngka(n) {
  if (n === 0) {
    return;

    //harus ada base case, kode untuk berenti
  }
  console.log(n);
  cetakAngka(n - 1);
}

cetakAngka(15);

//buat faktorial 5!
function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}
