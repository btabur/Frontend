//for döngüsü

for(var i=0;i<10;i++){
    //kodlar
    if(i==5) { //i 5 ise atla
        continue;
    }
    if(i==8) { // i 8 olduğunda döngüden çıkar
        break;
    }
}

//while döngüsü

var i=0
while(i<100){ //tek sayıları yazdırır
    i++;

    if((i%2)==0){
        continue
    }
    document.write(i);

}