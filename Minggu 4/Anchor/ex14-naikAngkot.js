function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var harga = 2000

    function hurufAngka(params) {
        // var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < rute.length; i++) {

            if (params == rute[i]) {
                params = i
                return i
            }
        }
    }

    function penumpang(params) {
        var data = {}
        data.penumpang = params[0]
        data.naikDari = params[1]
        data.tujuan = params[2]
        data.bayar = Math.abs(hurufAngka(params[2]) - hurufAngka(params[1])) * harga
        return data
    }

    var hasil = []
    for (let j = 0; j < arrPenumpang.length; j++) {
        hasil.push(penumpang(arrPenumpang[j]))
    }

    return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]