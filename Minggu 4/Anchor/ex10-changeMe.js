function changeMe(arr) {
    // you can only write your code here!

    function userData(firsName, lastName, gender, birthYear) {
        var data = {}
        var tahunSekarang = 2020
        data.firsName = firsName
        data.lastName = lastName
        data.gender = gender
        if (birthYear > 0) {
            data.age = tahunSekarang - birthYear
        } else {
            data.age = 'Invalid Birth Year'
        }

        return data
    }

    for (let i = 0; i < arr.length; i++) {
        var temp = userData(arr[i][0], arr[i][1], arr[i][2], arr[i][3])
        var nama = `${i + 1}. ${arr[i][0]} ${arr[i][1]} :`
        console.log(nama)
        console.log(temp);

    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:     =====> string
// { firstName: 'Christ',    =====> object
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""