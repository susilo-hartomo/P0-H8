// var name = 'Ayu Sudi D';

// var result = {};

// for (var i = 0; i < name.length; i++) {
//     // // result[name[i].toLowerCase()] = (result[nama[i].toLowerCase()] || 0) +1

//     if (result[name[i].toLowerCase()] === undefined) {
//         result[name[i].toLowerCase()] = 0
//     }

//     result[name[i].toLowerCase()] += 1;
// }

// console.log(result);

function noHaramAlpha(str, haramStr) {
    var result = {}

    for (var i = 0; i < str.length; i++) {
        if (result[str[i]] === undefined) {
            result[str[i]] = 0
        }
        result[str[i]] += 1
    }

    for (var j = 0; j < haramStr.length; j++) {
        delete result[haramStr[j]];
    }

    return result;
}

console.log(noHaramAlpha('pikacahuuuu chuuu', 'pu '));