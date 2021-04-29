var jmlAngkot = prompt('Berapa Jumlah Angkot ?');
var angkotBeroperasi = prompt('Berapa angkot yang beroperasi ?');

for (var noAngkot = 1 ; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log ('Angkot no. ' + noAngkot + ' beroperasi denga baik.')
    } else {
        console.log ('Angkot no. ' + noAngkot + ' tidak beroperasi.')
    }
}