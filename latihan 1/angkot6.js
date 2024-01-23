let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot == 10) {
    console.log("Angkot No. " + noAngkot + " Sedang lembur/ ngejar storan");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang di perbaiki");
  }
}
