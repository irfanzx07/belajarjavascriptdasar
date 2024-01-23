let h = "";

for (i = 0; i < 5; i++) {
  for (g = 0; g <= i; g++) {
    for (x = 5; x > i; x--) {
      h += "$";
    }
  }
  h += "\n";
}
console.log(h);
