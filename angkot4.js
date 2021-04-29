var jmlAngkot = prompt ('Berapa jumlah angkot ?');
var angkotBeroperasi = prompt ('Berapa jumalh yang beroperasi dengan baik');
var angkotLembur = prompt ('No angkot yang lembur :');

for (var noAngkot = 1 ; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log ('Angkot no. ' + noAngkot + ' beroperasi denga baik.')
    } else if (noAngkot == angkotLembur){
        console.log ('Angkot no. ' + noAngkot + ' sedang lembur')
    } 
    else {
        console.log ('Angkot no. ' + noAngkot + ' tidak beroperasi.')
    }
}