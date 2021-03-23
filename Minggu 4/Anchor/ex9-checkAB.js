function checkAB(str) {
    // you can only write your code here!
    idxA = []
    idxB = []
    jarakAB = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            idxA.push(i)
        } else if (str[i] == 'b') {
            idxB.push(i)
        }
    }
    // console.log('idxA');
    // console.log(idxA);
    // console.log('idxB');
    // console.log(idxB);

    check = 0
    if (idxA.length !== 0 && idxB.length !== 0) {
        for (let i = 0; i < idxA.length; i++) {
            for (let j = 0; j < idxB.length; j++) {
                if (Math.abs(idxA[i] - idxB[j]) == 4) {
                    check = 1
                    break;
                }
            }
        }
    }

    if (check == 1) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(' ');
console.log('======= CARA KE 1 =======');
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false



// CARA 2 SIMPLE CODE JARAK AB
function checkAB1(str) {

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' && str[i + 4] === 'b') {
            return true
        } else if (str[i] === 'b' && str[i + 4] === 'a') {
            return true
        }
    }
    return false
}


// TEST CASES
console.log(' ');
console.log('======= CARA KE 2 =======');
console.log(checkAB1('lane borrowed')); // true
console.log(checkAB1('i am sick')); // false
console.log(checkAB1('you are boring')); // true
console.log(checkAB1('barbarian')); // true
console.log(checkAB1('bacon and meat')); // false

