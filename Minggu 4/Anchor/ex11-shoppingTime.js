function shoppingTime(memberId, money) {
    // you can only write your code here!
    var data = {}
    data.memberId = memberId
    data.money = money
    data.listPurchased = []
    data.changeMoney = money

    if (data.memberId) {
        if (data.money >= 50000) {
            if (data.changeMoney >= 1500000) {
                data.listPurchased.push('Sepatu Stacattu')
                data.changeMoney -= 1500000
            }
            if (data.changeMoney < 1500000 && data.changeMoney >= 500000) {
                data.listPurchased.push('Baju Zoro')
                data.changeMoney -= 500000
            }
            if (data.changeMoney < 500000 && data.changeMoney >= 250000) {
                data.listPurchased.push('Baju H&N')
                data.changeMoney -= 250000
            }
            if (data.changeMoney < 250000 && data.changeMoney >= 175000) {
                data.listPurchased.push('Sweater Uniklooh')
                data.changeMoney -= 175000
            }
            if (data.changeMoney < 175000 && data.changeMoney >= 50000) {
                data.listPurchased.push('Casing Handphone')
                data.changeMoney -= 50000
            }
            return data
        }
        else {
            return 'Mohon maaf uang tidak cukup'
        }

    } else {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }


}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja