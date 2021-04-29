var jmlAngkot = prompt('Berapa Jumlah Angkot ?');
var angkotBeroperasi = prompt('Berapa angkot yang beroperasi ?');
var noAngkot=1;
while (noAngkot <= angkotBeroperasi) {
    console.log ('Angkot no ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}

// for (var noAngkot = noAngkot; noAngkot <= jmlAngkot - angkotBeroperasi; noAngkot++){
// console.log ('Angkot no ' + noAngkot + ' tidak beroperasi');
// }

for (var noAngkotTdkOperasi = noAngkot; noAngkotTdkOperasi <= jmlAngkot; noAngkotTdkOperasi++ ){
    console.log('Angkot No. ' + noAngkotTdkOperasi + ' tidak beroperasi dengan baik.');
}