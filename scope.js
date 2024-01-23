//global scope/window scope
let a = 1;

function test() {
  let b = 2;
  console.log(a);
}

test();
console.log(b);

//note
// javascript bisa mengakses dari dalam keluar scope tetapi dari luar tidak bisa mengakses ke dalam scope
//itu namanya function sope
