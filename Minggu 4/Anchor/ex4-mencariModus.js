function cariModus(arr) {
    // you can only write your code here!

    console.log(arr);
    dataUrut = arr;

    // MENGHITUNG SETIAP ANGKA MUNCUL BERAPA KALI
    temp = []
    for (let j = 0; j < dataUrut.length; j++) {
        temp[j] = 0
        for (let k = 0; k < dataUrut.length; k++) {
            if (dataUrut[j] == dataUrut[k]) {
                temp[j]++
            }
        }
    }
    // console.log(temp);

    // MENCATAT INDEX ANGKA YANG MUNCUL PALING BANYAK DARI KIRI
    var banyakAngka = 1
    var indexAngka = 0
    for (let k = 0; k < temp.length; k++) {
        if (temp[k] > banyakAngka) {
            banyakAngka = temp
            indexAngka = k
        }
    }

    //MENGECEK KALO SEMUA MODUS SETIAP ANGKA SAMA
    check = true
    for (let i = 0; i < temp.length - 1; i++) {
        if (temp[i] !== temp[i + 1]) {
            check = false
        }
    }

    if (check == false) {
        return `Modus data diatas adalah : ${dataUrut[indexAngka]} \n`
    } else {
        return `Modus tidak di temukan atau cuma ada 1 angka : ${-1} \n`
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

// CASES BELUM TERSELESAIKAN
console.log('');
console.log('======= CASE TAMBAHAN =======');
console.log('belum tahu cara apabila jumlah modus sama semua dengan angka yang berbeda');
console.log(cariModus([5, 10, 10, 6, 5, 6])); // -1
