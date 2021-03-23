/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

// Algoritma
// 1. Atur HARGA DASAR tiket masuk RP 25.000
// 2. Buat TEMP kosong untuk menampung harga tiket dasat yang akan ditambah dengan kondisi Input (Umur / Status Pelajar)
// 2. Input data pengungjung (Nama /  Tahun Lahir / Status Pelajar)
// 3. jika Tahun Sekarang (2020) - Tahun Lahir < 2 tahun maka Harga Tiket maka TEMP = 0, 
// 3. jika Tahun Sekarang (2020) - Tahun Lahir >= 2 DAN  jika Tahun Sekarang (2020) - Tahun Lahir <= 10 tahun maka Harga Tiket maka TEMP = HARGA DASAR, 
// 4. jika Tahun Sekarang (2020) - Tahun Lahir >= 11 DAN Tahun Sekarang (2020) - Tahun Lahir <= 18 
//    dan jika status pelajar false maka Harga Tiket maka TEMP = HARGA DASAR * 1.5, jika status pelajar true TEMP = HARGA DASAR * 1.25 
// 5. jika Tahun Sekarang (2020) - Tahun Lahir >= 19 DAN Tahun Sekarang (2020) - Tahun Lahir < 120 
//    dan jika status pelajar false maka Harga Tiket maka TEMP = HARGA DASAR * 2, jika status pelajar true TEMP = HARGA DASAR * 1.5 
// 6. Jika kondisi 3, 4 dan 5 terpenih mana TAMPILKAN : NAMA TEMP
// 7. jika Tahun Sekarang (2020) - Tahun Lahir > 120 ATAU Tahun Lahir < 1900 TAMPILKAN   'Invalid Age' Back to Home page

// Pseudocode
// SET HARGA DASAR = 25000
// SET TEMP = 0
// SET TAHUN SEKARANG

// INPUT 
//     NAMA = 'Sting'
//     TAHUN LAHIR = Number
//     STATUS PELAJAR = Boolean ( true / false)

// IF (TAHUN SEKARANG - TAHUN LAHIR > 120 || TAHUN LAHIR == 1900 )
//     DISPLAY 'Invalid Age'
//     CLOSE Back to home page

// ELSE
//     IF (TAHUN SEKARANG - TAHUN LAHIR < 2 )
//         TEMP = 0 

//     ELSE IF (TAHUN SEKARANG - TAHUN LAHIR >= 2 && TAHUN SEKARANG - TAHUN LAHIR <= 10 )
//         TEMP = HARGA DASAR

//     ELSE IF ((TAHUN SEKARANG - TAHUN LAHIR >= 11 && (TAHUN SEKARANG - TAHUN LAHIR <= 18))
//             IF STATUS PELAJAR == false
//                 TEMP = HARGA DASAR * 1.5
//             ELSE IF STATUS PELAJAR == true
//                 TEMP = HARGA DASAR * 1.25
//             END IF

//      ELSE IF ((TAHUN SEKARANG - TAHUN LAHIR >= 19 )
//             IF STATUS PELAJAR == false
//                 TEMP = HARGA DASAR * 2
//             ELSE IF STATUS PELAJAR == true
//                 TEMP = HARGA DASAR * 1.5
//             END IF

//     DISPLAY `${NAMA} ${TEMP}`

// END IF



// MAAF ALGORITMA SAMA PSEUDOCODE AGAK BERBEDA MUNGKIN BISA DIULANG KALO WAKTU CUKUP