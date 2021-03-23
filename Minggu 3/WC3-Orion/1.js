/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf etc
 */

//PSEUDOCODE
/*BUILD FUNCTION
	DETECT mine
	DETECT steps
	CREAT temporaryArray
	FOR i = 0 TO panjang mine 
		FOR j=0 TO panjang mine pertama
			tambahkan mine[i][j] ke temporaryArray
		END FOR
	END FOR

	CREAT temporary barangTambang berisi semua jenis tambang dengan jumlah banyak tiap tambang diisi 0
			Jenis tambang coppper, silver, gold, dan diamond
	FOR k = 0 TO step 
		IF temporaryArray[k] = string c is TRUE
			barangTamabang berisi copper +1 
		ELSE IF temporaryArray[k] = string s is TRUE
			barangTamabang berisi copper +1
		ELSE IF temporaryArray[k] = string g is TRUE
			barangTamabang berisi copper +1
		ELSE IF temporaryArray[k] = string d is TRUE
			barangTamabang berisi diamond +1
		END IF
	END FOR

	CREAT temporary hasilTambang
	FOR i = 0 to panjang barangTambang
		IF barangTambang[i] jumlah hasil tambang tidak 0
			masukan barangTambang[i] ke hasilTambang
		END IF
	END FOR

	RETURN hasilTambang
END FUNCTION
*/

//FUNCTION 
function mineTycoon(mine, steps) {
	//implementasi function disini!
	var temp = []
	for (let i = 0; i < mine.length; i++) {
		for (let j = 0; j < mine[0].length; j++) {
			temp.push(mine[i][j])
		}
	}

	// console.log(temp);
	// console.log(' =========== ');

	var barangTambang = [[0, 'copper'], [0, 'silver'], [0, 'gold'], [0, 'diamond']]
	for (let j = 0; j < steps; j++) {
		if (temp[j] == 'c') {
			barangTambang[0][0]++
			temp[j] = '*'
		} else if (temp[j] == 's') {
			barangTambang[1][0]++
			temp[j] = '*'
		} else if (temp[j] == 'g') {
			barangTambang[2][0]++
			temp[j] = '*'
		} else if (temp[j] == 'd') {
			barangTambang[3][0]++
			temp[j] = '*'
		} else {
			temp[j] = '*'
		}
	}

	hasilTambang = []
	for (let k = 0; k < barangTambang.length; k++) {
		if (barangTambang[k][0] !== 0) {
			hasilTambang.push(barangTambang[k])
		}
	}
	return hasilTambang
}

var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
// console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
// console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
// console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]






// ======================================
// MEMBUAT CONSOLE LOG SEHABIS DI TAMBANG

var mine = [['#', 'c', 's', '#', '#', '#', '#'],
['d', '#', 'c', '#', 'd', '#', '#'],
['#', '#', '#', 'g', '#', '#', '#']]


function mineTycoon1(mine, steps) {
	//implementasi function disini!
	var barangTambang = [[0, 'cooper'], [0, 'silver'], [0, 'gold'], [0, 'diamond']]
	// console.log(barangTambang[i][1][0])
	for (let j = 0; j < mine.length; j++) {
		// console.log(mine[j])
		for (let k = 0; k < mine[j].length; k++) {
			// console.log(mine[j][k], 'perhuruf')
			for (let i = 0; i < barangTambang.length; i++) {
				// console.log('tambang', barangTambang[i], '<<<<<<<<<<<<<<<<,')
				if (mine[j][k] === barangTambang[i][1][0] && steps >= 1) {
					barangTambang[i][0]++
				}
			}
			steps--
		}
	}

	var hasilTambangAkhir = []
	for (let i = 0; i < barangTambang.length; i++) {
		if (barangTambang[i][0] !== 0) {
			hasilTambangAkhir.push(barangTambang[i])
		}

	}
	// console.log(barangTambangAkhir)

	return hasilTambangAkhir

	// for (let i = 0; i < mine.length; i++) {
	// 	for (let j = 0; j < mine[0].length; j++) {
	// 		if (steps == 0) {
	// 			break
	// 		} else {
	// 			check = true
	// 			for (let k = 0; k < barangTambang.length; k++) {
	// 				if (barangTambang == Null) {

	// 				}

	// 			}

	// 			if (check == flase) {

	// 			}
	// 			mine[i][j] = ' '
	// 			steps--
	// 		}
	// 	}
	// }
}

console.log('');
console.log(mineTycoon1(mine1, 10));
console.log('mine hasil setelah di tamabang');
// console.log(mine);
