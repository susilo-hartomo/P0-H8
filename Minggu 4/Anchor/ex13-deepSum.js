function deepSum(arr) {
    // Code disini
    function sum(deep) {
        jumlah = 0
        for (let k = 0; k < deep.length; k++) {
            jumlah += deep[k]
        }
        return jumlah
    }

    totalJumlah = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // console.log(arr[i][j]);
            totalJumlah += sum(arr[i][j])
        }
        // console.log(totalJumlah);
    }

    if (totalJumlah == 0) {
        return 'No Number'
    }

    return totalJumlah
}

//TEST CASE
console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
])); // 316

console.log('');
console.log('===========================');

console.log(deepSum([
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [1]
    ],
    [
        [2]
    ]
])); // 156

console.log('');
console.log('===========================');

console.log(deepSum([])); // No number