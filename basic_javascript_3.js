
function multiply() {
    var x = 50 * 50;
    document.getElementById("math").innerHTML= "50 * 50 = " + x;
}

function add() {
    var y = 10 + 10;
    document.getElementById("math").innerHTML= "10 + 10 =" + y;
}

function subtract() {
    var a = 300-100;
    document.getElementById("math").innerHTML= "300 - 100 =" + a;
}

function divide() {
    var b = 200/25;
    document.getElementById("math").innerHTML= "200/25=" + b;
}

function remainder() {
    var c = 1000 % 60;
    document.getElementById("math").innerHTML= "when you divide 1000 by 60 you have a remainder of: " + c;

}

function negation() {
    var d = 75;
    document.getElementById("math1").innerHTML = -d;
}

function positive() {
var e = 40;
e++;
document.write(e);
}

function negative() {
var f = 30.5;
f--;
document.write(f);
}


function last() {
   window.alert(Math.random());
}