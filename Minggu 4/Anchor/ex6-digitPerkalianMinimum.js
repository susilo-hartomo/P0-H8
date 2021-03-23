function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    temp = []
    for (let i = 0; i <= angka; i++) {
        if (angka % i == 0) {
            temp.push(i)
        }
    }

    var pasanganAngka = []
    for (let j = 0; j < temp.length / 2; j++) {
        pasanganAngka[j] = String(temp[j]) + String(temp[temp.length - 1 - j])
    }

    console.log('pasangan Angka');
    console.log(pasanganAngka);
    console.log('==================================');

    // var banyakPasangan = 1
    var minimalDigit = pasanganAngka[pasanganAngka.length - 1].length
    // console.log(minimalDigit);

    // for (let k = 0; k < pasanganAngka.length - 1; k++) {
    //     // console.log(pasanganAngka[pasanganAngka.length - 2 - k].length);
    //     if (pasanganAngka[pasanganAngka.length - 2 - k].length == minimalDigit) {
    //         banyakPasangan++
    //     }

    // }

    return `Banyak pasangan angka dengan minimum digit : ${minimalDigit} \n`
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2