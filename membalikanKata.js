const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jalankanProgram() {
  rl.question("\nMasukan kata: ", function(teks) {
    
    let hasilTerbalik = "";

    // Loop buat membalikkan kata
    for (let i = teks.length - 1; i >= 0; i--) {
      hasilTerbalik = hasilTerbalik + teks[i];
    }

    console.log("Hasil balik: " + hasilTerbalik);

    // Cek apakah kata asli dan kata terbalik itu sama
    if (teks === hasilTerbalik) {
      console.log("Keterangan: Kata ini adalah PALINDROME!");
    } else {
      console.log("Keterangan: Kata ini BUKAN palindrome.");
    }

    // Tanya mau ulang atau enggak
    rl.question("\nMau coba kata lain? (y/n): ", function(jawab) {
      if (jawab === "y") {
        jalankanProgram();
      } else {
        console.log("Selesai!");
        rl.close();
      }
    });

  });
}

jalankanProgram();