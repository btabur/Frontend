
/*
functionfonksiyonAdi(parametre1,parametre2) {
   
    //kodlar
}
*/
function say() {
    for(var i =0;i<10;i++){
        document.write(i + "    ");
    }

}
function topla(sayi1,sayi2) {
    document.write("Sayıların Toplamı: " + (sayi1+sayi2));
}

function topla(sayi1,sayi2) {
   return sayi1+sayi2;
}
document.getElementById("id").innerHTML=topla(4,5);

//belirlenen zaman içerisinde sürekli tekrar eden fonksiyonlar
function veri() {
    document.write("deneme");


    setTimeout('veri()',1000); //1000 mili saniyede bir tekrar eder.
}


