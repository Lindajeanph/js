function word() {
document.write(typeof "word");
}

function afunction() {
    document.getElementById("test3").innerHTML = isNaN('this is a string');
}

function function2() {
document.getElementById("test2").innerHTML = isNaN('007');
}

function infinity() {
document.write(2e310);
}

function neginfinity() {
document.write(-3e310);
}

function math() {
console.log(2 + 2);
}

function myfunction() {
document.write("10" + 5);
}

function myfunction2() {
document.write(10 == 10); /*for true*/
}

function myfunction3() {
document.write(3 == 11);  /*for false*/
}


 
function equal() {
x = 10;
y = 10;
document.write(x===y);
}

function and() {
    document.write(5 > 2 && 10 >4);
}

function or() {
    document.write(5 > 10 || 10 > 4);
}

function lastfunction() {
    document.getElementById("not").innerHTML = ! (20 < 10);
}