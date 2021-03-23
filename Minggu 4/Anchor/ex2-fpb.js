function fpb(angka1, angka2) {
    // you can only write your code here!
    if (angka1 > angka2) {
        temp = []
        for (let i = 1; i <= angka2; i++) {
            if ((angka1 % i == 0) && (angka2 % i == 0)) {
                temp.push(i)
            }
        }
        return temp[temp.length - 1]
    } else {
        temp = []
        for (let i = 1; i <= angka1; i++) {
            if ((angka1 % i == 0) && (angka2 % i == 0)) {
                temp.push(i)
            }
        }
        return temp[temp.length - 1]
    }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1