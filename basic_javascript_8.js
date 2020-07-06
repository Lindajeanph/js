function full_sentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence ";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}


function slicemethod() {
    var sentence="all work and no play makes Johnny a dull boy.";
    var section =sentence.slice(27,33);
    document.getElementById("slice").innerHTML= section;
}


function weathertoday() {
    var str = "Don't forget your umbrella!";
    var ex = str.toUpperCase();
    document.getElementById("forecast").innerHTML = ex;
}

function string_method() {
    var x=183;
    document.getElementById("numberstostring").innerHTML=x.toString();
}


function precisionmethod() {
    var x= 1763637.0063
    document.getElementById("precision").innerHTML= x.toPrecision(5);
}