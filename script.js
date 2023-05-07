// variable



// function hitung() {
//     var hasil = document.getElementById("hasil")
//     var harga = document.getElementById("harga")
//     var diskon = document.getElementById("diskon")

//     var hitung = harga - (harga * diskon / 100);

//     return hasil;
// }


function hitung() {
    var diskon = document.getElementById("diskon").value;
    var harga = document.getElementById("harga").value;
    var hargaDiskon = harga - (harga * diskon / 100);
    document.getElementById("hasil").value = hargaDiskon;
  }
  
