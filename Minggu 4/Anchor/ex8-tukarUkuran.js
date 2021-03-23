function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var kamus = 'abcdefghijklmnopqrstuvwxyz 1234567890-!'
    var kamusC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    temp = ''
    for (let i = 0; i < kalimat.length; i++) {
        for (let j = 0; j < kamus.length; j++) {

            if (j < 26) {
                if (kalimat[i] == kamus[j]) {
                    temp += kamusC[j]
                } else if (kalimat[i] == kamusC[j]) {
                    temp += kamus[j]
                }
            } else {
                if (kalimat[i] == kamus[j]) {
                    temp += kamus[j]
                }
            }
        }
    }
    return temp
}


// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

