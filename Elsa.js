// Contoh penggunaan if, else, dan nested if
let angka = 10;

if (angka > 0) {
  console.log("Angka adalah positif.");
} else if (angka < 0) {
  console.log("Angka adalah negatif.");
} else {
  console.log("Angka adalah nol.");
}

// Contoh penggunaan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu.");
    break;
  default:
    console.log("Hari ini adalah hari lain.");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Contoh penggunaan while loop
let count = 0;
while (count < 5) {
  console.log("Iterasi ke-" + (count + 1));
  count++;
}

// Contoh penggunaan do-while loop
let counter = 0;
do {
  console.log("Iterasi ke-" + (counter + 1));
  counter++;
} while (counter < 5);

// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasilPenambahan = tambah(3, 4);
console.log("Hasil penambahan: " + hasilPenambahan);

