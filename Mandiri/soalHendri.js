// bualah aritmatika 7, 15, 31, 
//maka pola 2n + 1

function Kali2Tambah1() {
    let n = 1
    // bisa pake looping 
    while (n < 127) {
        n = n * 2 + 1
        if (n > 3) {
            console.log(n)
        }
    }
}

console.log('Jawaban No 1')
Kali2Tambah1()

// buatlah array 2 dimensi 
// 54321
//  4321
//   321
//    21
//     1

function arr2dimention(n) {
    //untuk membuat array 2 dimention 
    // dibutuhkan 2 for loop
    for (let i = n; i > 0; i--) {
        //untuk menampung di setiap baris
        //karena di JS untuk nampung angka di jejer tidak bisa
        //maka di tampung dala array yang kemudian di gabung
        let rowTemp = []
        for (let j = n; j > 0; j--) {
            if (j <= i) {
                rowTemp.push(j)
            } else {
                rowTemp.push(' ')
            }
        }
        //untuk menggabung sebuah array dengan .join
        console.log(rowTemp.join(''))
    }
}

console.log('Jawaban No 2')
arr2dimention(5)

//buatlah array 2 dimention untuk membuat star
// dengan pola sebagai berikut
// *****
//   ***
//     *
//   ***
// *****

function starArr(n) {
    let sumStart = Number(JSON.stringify(n))
    let allRowStar = []
    for (let i = 0; i < n / 2; i++) {
        let rowStar = ''
        for (let j = n; j > 0; j--) {
            if (sumStart >= j) {
                rowStar += '*'
            } else {
                rowStar += ' '
            }
        }
        sumStart -= 2
        allRowStar.push(rowStar)
    }
    //metode looping di JS ada banyak salah satunya .map
    allRowStar.map(row => console.log(row))

    //membalik susunan arr dari belakang bisa menggunakan .revece
    //didalam JS juga dapat menggunakan if dengan ? dan :
    allRowStar.reverse().map((row, i) => i !== 0 ? console.log(row) : null)
}

console.log('Jawaban No 3')
starArr(5)

function perpangkatan2(n) {
    for (let i = 0; i < n; i++) {
        console.log(Math.pow(2, i + 1))
    }
}

console.log('Jawaban No 4')
perpangkatan2(7)

function bintangDiagonal(n) {
    for (let i = 1; i <= n; i++) {
        let rowStart = ''
        for (let j = 1; j <= n; j++) {
            if (i === j || i + j === n + 1) {
                rowStart += '*'
            } else {
                rowStart += ' '
            }
        }
        console.log(rowStart)
    }
}

console.log('Jawaban No 5')
bintangDiagonal(5)