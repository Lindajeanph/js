var x =82;
document.write(x);
{
    let x= 33;
    document.write("<br>"+x);
}
document.write("<br>"+x);

function constantfunction() {
    const instrument= {type:"guitar", brand:"fender", color:"black"};
    instrument.color= "blue";
    instrument.price="$900";
    document.getElementById("constant").innerHTML= "the cost of the " + instrument.type + " was " + instrument.price;
}

function arrayfunction() {
    var dogpic= [];
    dogpic[0]="sleeping";
    dogpic[1]="playing";
    dogpic[2]="eating";
    dogpic[3]="barking";
    document.getElementById("array").innerHTML="In this picture, the dog is " + dogpic[2] + ".";

}


var instruments = ["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"];
var content = "";
var y
function forloop() {
    for (y=0; y< instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("listofinstruments").innerHTML = content;
}


function counttoten() {
    var digit ="";
    var x=1;
    while (x<11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("countingtoten").innerHTML= digit;
}