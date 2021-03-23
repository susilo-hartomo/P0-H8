function countProfit1(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    // you can only write your code here!

    if (shoppers.length != 0) {

        pembeli = [{ product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 }, { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 }, { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }]

        for (let i = 0; i < shoppers.length; i++) {
            if (shoppers[i].product == 'Sepatu Stacattu' && pembeli[0].leftOver >= shoppers[i].amount) {
                pembeli[0].leftOver -= shoppers[i].amount
                pembeli[0].totalProfit += listBarang[0][1] * shoppers[i].amount
                pembeli[0].shoppers.push(shoppers[i].name)

            } else if (shoppers[i].product == 'Baju Zoro' && pembeli[1].leftOver >= shoppers[i].amount) {
                pembeli[1].leftOver -= shoppers[i].amount
                pembeli[1].totalProfit += listBarang[1][1] * shoppers[i].amount
                pembeli[1].shoppers.push(shoppers[i].name)

            } else if (shoppers[i].product == 'Sweater Uniklooh' && pembeli[2].leftOver >= shoppers[i].amount) {
                pembeli[2].leftOver -= shoppers[i].amount
                pembeli[2].totalProfit += listBarang[2][1] * shoppers[i].amount
                pembeli[2].shoppers.push(shoppers[i].name)

            }
        }
        return pembeli

    } else {
        return []
    }
}



// TEST CASES
console.log('soal 1 ===========================');
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
console.log('');
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log('soal 2 ==========================');
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
console.log('');
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log('soal 3 ==========================');
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
console.log('');
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log('soal 4 =========================');
console.log(countProfit([])); //[]



// CARA KE 2 ===================================
function countProfit1(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    // you can only write your code here!
    var result = []

    if (shoppers.length != 0) {
        for (let i = 0; i < listBarang.length; i++) {
            var barang = {
                product: listBarang[i][0],
                shoppers: [],
                leftOver: listBarang[i][2],
                totalProfit: 0,
                price: listBarang[i][1]
            }
            for (let j = 0; j < shoppers.length; j++) {
                if (barang.product === shoppers[j].product && barang.leftOver >= shoppers[j].amount) {
                    barang.shoppers.push(shoppers[j].name)
                    barang.leftOver -= shoppers[j].amount
                    barang.totalProfit += barang.price * shoppers[j].amount
                }
            }
            delete barang.price
            // console.log(barang)
            result.push(barang)
        }
    } else {
        return []
    }
    return result
}