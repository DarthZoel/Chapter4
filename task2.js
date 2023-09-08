/**
 * Tulis sebuah program untuk menampilkan angka genap dari 1 hingga 20
 */
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Angka ${i} adalah genap.`)
    }
}

/**
 * Tulis sebuah program yang menghitung jumlah dari angka 1 hingga 100.
 */
let temp = 0
for (let i = 1; i <= 100; i++) {
    temp += i
}
console.log(`Jumlah angka 1-100 adalah ${temp}.`)


/**
 * Pola Segitiga Naik
 * Tampilkan pola segitiga asteriks sebagai berikut untuk n = 5. Contoh:

*
**
***
****
*****

 */
console.log("Segitiga Naik")
let n = 5
let asterisk = ""
for (let i = 0; i < n; i++) {
    asterisk += "*"
    console.log(asterisk)
}


/**
 * Pola Segitiga Terbalik
 * Tampilkan pola segitiga asteriks terbalik sebagai berikut untuk n = 5. Contoh:
 
*****
****
***
**
*

 */
console.log("Segitiga Terbalik")
let n2 = 5
for (let i = n2; i > 0; i--) {
    let asterisk2 = ""
    for (let j = i; j > 0; j--) {
        asterisk2 += "*"
    }
    console.log(asterisk2)
}


/**
 * Pola Berlian
 * Tampilkan pola segitiga asteriks berlian sebagai berikut untuk n = 5. Contoh:
 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


 */
console.log("Asterisk Diamond")
let n3 = 5
if (n3 % 2 === 0) {
    n3++;
}

const midpoint = Math.floor(n3 / 2);
//console.log(midpoint)
for (let i = 0; i < n3; i++) {
    let row = '';
    for (let j = 0; j < n3; j++) {
        if (Math.abs(midpoint - i) + Math.abs(midpoint - j) <= midpoint) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}


/**
 * Pola Segitiga Bilangan
 * Tampilkan pola segitiga dengan angka dengan asteriks sebagai pemisah:

1
1*2
1*2*3
1*2*3*4
1*2*3*4*5

 */
console.log("Segitiga Bilangan")
let tinggi = 5
for (let i = 1; i <= tinggi; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
        baris += j;
        if (j < i) {
            baris += "*";
        }
    }
    console.log(baris);
}
















