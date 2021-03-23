function angkaPrima(angka) {
    // you can only write your code here!
    if (angka == 2) {
        return true
    } else {
        var check = true
        for (i = 2; i < angka / 2; i++) {
            if (angka % i == 0) {
                check = false
            }
        }
        return check
    }

}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false