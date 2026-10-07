const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hitungKaloriPerOlahraga(jenis, durasi) {
  let kaloriPerMenit = 0;
  let nama = jenis.toLowerCase();

  if (nama === "lari") {
    kaloriPerMenit = 60 / 5; // 12 kalori per menit
  } else if (nama === "push-up") {
    kaloriPerMenit = 200 / 30; // 6.67 kalori per menit
  } else if (nama === "plank") {
    kaloriPerMenit = 5 / 1; // 5 kalori per menit
  }

  let total = 0;
  if (kaloriPerMenit > 0) {
    // INNER LOOP: menghitung kalori menit demi menit
    for (let i = 1; i <= durasi; i++) {
      total = total + kaloriPerMenit;
    }
  }
  return total;
}

function jalankanProgram() {
  rl.question("\nMasukan Olahraga Pertama (lari, push-up, plank): ", function(olahraga1) {
    rl.question("Masukan Durasi Olahraga Pertama (menit): ", function(durasi1) {
      rl.question("Masukan Olahraga Kedua (lari, push-up, plank): ", function(olahraga2) {
        rl.question("Masukan Durasi Olahraga Kedua (menit): ", function(durasi2) {

          let d1 = parseInt(durasi1);
          let d2 = parseInt(durasi2);

          if (isNaN(d1) || d1 <= 0 || isNaN(d2) || d2 <= 0) {
            console.log("Durasi harus berupa angka yang valid!");
          } else {
            let totalSemuaOlahraga = 0;

            let daftarLatihan = [
              { nama: olahraga1, durasi: d1 },
              { nama: olahraga2, durasi: d2 }
            ];

            console.log("\n--- SIMULASI PERHITUNGAN ---");

            // OUTER LOOP: mengulang untuk tiap olahraga (2 kali)
            for (let j = 0; j < daftarLatihan.length; j++) {
              let item = daftarLatihan[j];
              
              // Memanggil fungsi yang berisi INNER LOOP
              let kaloriSesi = hitungKaloriPerOlahraga(item.nama, item.durasi);
              
              if (kaloriSesi === 0) {
                console.log("Olahraga '" + item.nama + "' tidak dikenali.");
              } else {
                console.log(item.nama + " (" + item.durasi + " menit) = " + Math.round(kaloriSesi) + " kalori");
                totalSemuaOlahraga = totalSemuaOlahraga + kaloriSesi;
              }
            }

            console.log("\n========================================");
            console.log("Total gabungan kalori terbakar: " + Math.round(totalSemuaOlahraga) + " kalori!");
            console.log("========================================");
          }

          rl.question("\nMau hitung lagi? (y/n): ", function(jawab) {
            if (jawab.toLowerCase() === "y") {
              jalankanProgram();
            } else {
              console.log("Selesai, terima kasih!");
              rl.close();
            }
          });

        });
      });
    });
  });
}

jalankanProgram();