/**
 * Seseorang akan mendaftar paket Indiehome terbaru. Buatlah program untuk menghitung harganya. Untuk mendaftar, dia perlu menyertakan nama, nomor ktp, alamat, serta jenis rumah.
 * Jika nama tidak diisi, program akan mengoutput 'NAMA HARUS DIISI!'.
 * - Jika panjang nomor KTP dibawah 4 angka atau nomor KTP tidak diisi, maka keluarkanlah output
 * 'NOMOR KTP TIDAK VALID'.
 * - Untuk soal ini, terdapat 4 lokasi alamat: 'Jakarta', 'Surabaya', 'Yogyakarta', dan 'Bandung'. Selain keempat alamat tersebut, maka program akan mengeluarkan
 * 'Alamat tidak diketahui'. Saat kalian membuat program, jangan lupa untuk menangani kasus-kasus input kota yang tidak ada dalam daftar.
 * Masing-masing lokasi memiliki harga dasar paket yang berbeda:
 *     - Jakarta   100000
 *     - Surabaya   50000
 *     - Yogyakarta 45000
 *     - Bandung    90000
 * -Jenis rumah ada 3 macam: 'normal', 'large', 'kosan'. Jika jenis rumah tidak ada di dalam ketiga rumah tersebut, program akan mengeluarkan output 'Jenis rumah salah'
 * Masing-masing jenis rumah akan mendapatkan biaya yang berbeda-beda. Namun, jika jenis rumah adalah 'kosan' maka tidak boleh mendaftar ke program ini.
 *     - Biaya 'normal': 30000
 *     - Biaya 'large' : 50000
 * Buatlah program yang akan menghitung biaya total dari paket Indiehome tersebut. Program tersebut akan mengoutput:
 * 'NAMA_PENDAFTAR NO_KTP TOTAL_BIAYA'
 * contoh: 'Rani 10049581293 500000'
 *
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN FUNCTION / METHODS
 * - HANYA diperbolehkan untuk mengambil properties .length dari String
 *
 */

var name = 'a' // silakan berikan nilai bebas
var nomor_ktp = '12345' //silahkan berikan nilai bebas
var alamat = 'Jak' // bisa diisi dengan alamat Jakarta atau Surabaya atau Yogyakarta atau Bandung selain alamat tersebut silahkan keluarkan output seperti yang diminta
var jenis_rumah = 'large' //bisa diisi dengan 3 jenis rumah normal atau large atau kosan selain jenis rumah tersebut silahkan keluarkan output seperti yang diminta
var error = false
//tulislah kode disini

var harga = 0

if (name == '') {
    console.log('NAMA HARUS DIISI')
    error = true
} else {
    if (nomor_ktp.length < 4 || nomor_ktp == '') {
        console.log('NOMOR KTP TIDAK VALID')
        error = true
    } else {

        if (alamat) {
            switch (alamat) {
                case 'Jakarta':
                    harga += 100000
                    break;
                case 'Surabaya':
                    harga += 50000
                    break
                case 'Yogyakarta':
                    harga += 45000
                    break
                case 'Bandung':
                    harga += 90000
                    break
                default:
                    error = true
                    console.log('Alamat tidak tersedia');
                    break
            }

            if (jenis_rumah) {

                if (jenis_rumah !== 'kosan') {
                    switch (jenis_rumah) {
                        case 'normal':
                            harga += 30000
                            break;
                        case 'large':
                            harga += 50000
                            break;
                    }

                } else {
                    console.log('Jenis rumah salah')
                    error = true

                }



            } else {
                console.log('Jenis Rumah Tidak ada')
                error = true

            }

        } else {
            console.log('Alamat tidak diketahui')
            error = true

        }
    }
}

if (!error) {
    console.log(`${name} ${nomor_ktp} ${harga}`)
}