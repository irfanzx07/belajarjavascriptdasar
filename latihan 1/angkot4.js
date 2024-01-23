let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");
  } else if (noAngkot === 8) {
    console.log("Angkot no. " + noAngkot + " Sedang libur");
  } else {
    console.log("Angkot no. " + noAngkot + "sedang di perbaiki");
  }
}
