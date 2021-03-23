/**
 * Instruksi
 *
 * ===============
 * Count Stuff
 * ===============
 *
 * Pada program ini kalian harus mencari beberapa hal yang terdapat di dalam sebuah string.
 * Kalian diberikan 2 input, 'line' dan 'param'.
 * String line berisi angka (0-9), huruf (lowercase) atau karakter lain yang sembarang ('/', '#', '@', '$', dll). String ini merupakan string yang akan kalian proses.
 * Contoh line: '123abcdfghi9657$%^&*'
 * String param berisi parameter yang akan menentukan barang yang kalian cari di dalam string tersebut.
 * param bisa berupa: - 'sigma'
 *                         jika param berupa sigma, maka jumlahkan semua angka di dalam string.
 *                     - 'letters'
 *                         jika param berupa letters, maka carilah jumlah huruf di dalam string.
 *                     - 'length'
 *                         jika param berupa length, maka program akan mengoutput panjang dari elemen string yang berupa huruf dan angka.
 *                     - Selain ketiga param diatas, maka program akan mengoutput 'Parameter salah'
 * Contoh
 *
 * 1.
 * 'line' : 'abcdefghijklmonjasd'
 * 'param': 'letters'
 *
 * Output: 19
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'sigma'
 *
 * Output: 0
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'length'
 *
 * Output: 19
 *
 * 2. line: 'abcde12345
 *
 * param : 'sigma'
 *
 * Output: 15
 *
 * line: 'abcde12345
 *
 * param : 'length'
 *
 * Output: 10
 *
 * RULES :
 * - HANYA BOLEH MENGGUNAKAN BUILT-IN METHOD / FUNCTION dari tipe data Number
 *
 */

var line = 'abcde&12345' //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
var param = 'number' //kalian bisa mengisi param ini dengan 'sigma', 'letters', 'length', dll

//tulis kode kalian disini
function countStaf(line, params) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    temp_length = 0
    temp_sigma = 0
    temp_letter = ''

    for (let i = 0; i < line.length; i++) {
        if (Number(line[i]) + temp_sigma > 0) {
            temp_sigma += Number(line[i])
            temp_length++
        }
        else {
            for (let j = 0; j < kamus.length; j++) {
                if (line[i] == kamus[j]) {
                    temp_letter += line[i]
                    temp_length++
                }

            }
        }
    }

    if (params == 'sigma') {
        return temp_sigma
    } else if (params == 'letters') {
        return temp_letter
    }
    else {
        return temp_length
    }
}

console.log(countStaf(line, param));
// console.log(countStaf('param == sigma'));
// console.log(countStaf(line, 'sigma'));
// console.log(countStaf('param == letters'));
// console.log(countStaf(line, 'letters'));



