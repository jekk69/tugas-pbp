const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan Nilai Ujian (0-100): ", function(input) {
  // Menggunakan parseInt() sesuai instruksi
  let nilai = parseInt(input);

  // Menggunakan if...else untuk menentukan grade
  if (isNaN(nilai) || nilai < 0 || nilai > 100) {
    console.log("Input yang Anda masukkan bukan angka yang valid (0-100).");
  } else if (nilai >= 85) {
    console.log(`Nilai ${nilai} adalah Grade A.`);
  } else if (nilai >= 70) {
    console.log(`Nilai ${nilai} adalah Grade B.`);
  } else if (nilai >= 55) {
    console.log(`Nilai ${nilai} adalah Grade C.`);
  } else if (nilai >= 40) {
    console.log(`Nilai ${nilai} adalah Grade D.`);
  } else {
    console.log(`Nilai ${nilai} adalah Grade E.`);
  }

  rl.close();
}); 