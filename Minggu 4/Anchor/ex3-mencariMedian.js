function cariMedian(arr) {
    // you can only write your code here!

    function mengurutkanNilai(nilai) {
        terurut = nilai
        for (let i = 0; i < nilai.length; i++) {
            temp = 0
            for (let j = 0; j < nilai.length; j++) {
                if (terurut[i] < terurut[j]) {
                    temp += terurut[i]
                    terurut[i] = terurut[j]
                    terurut[j] = temp
                    temp = 0
                }
            }
        }
        return terurut
    }

    console.log('=== DATA TERUURUT ===');
    console.log(mengurutkanNilai(arr));
    kelipatan = mengurutkanNilai(arr);

    median = 0
    if (kelipatan.length % 2 == 0) {
        median += kelipatan[kelipatan.length / 2]
        median += kelipatan[(kelipatan.length / 2) - 1]
        median = median / 2

    } else {
        median += kelipatan[(kelipatan.length - 1) / 2]
    }
    return `Median data diatas adalah : ${median} \n`

}

// TEST CASES(=====kasih soal data belum urut======)
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7 (Jawaban Salah)
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

// TES CASES
console.log('==== CASES TAMBAHAN ====');
console.log('Data awal : [1, 4, 3, 2, 5]');
console.log(cariMedian([1, 4, 3, 2, 5])); // 3

// Note :
// Median nilai yang berada di tengah setalah data di URUT kan