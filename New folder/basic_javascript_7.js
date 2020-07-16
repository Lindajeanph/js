
function get_age() {
    age= document.getElementById("age").value;
    if (age >= 25) {
        age= "You can rent a car";
    } else {
        age= "you can not rent a car";
    }
    document.getElementById("birth_year?").innerHTML = age;
}


function time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "it is morning time";
    }
    else if (time > 12 == time < 18) {
        reply = "it is the afternoon";
    }
    else {
        reply = "it is evening time";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}



var x=100;
function add_numbers_1() {
    document.write(20+x+"<br>");
}
function add_numbers_2() {
    document.write(x+100);
}
add_numbers_1();
add_numbers_2();

function add_numbers_1() {
    var x=50;
    console.log(10+x);
    document.write(10+x+"<br>");
}
function add_numbers_2() {
    document.write(x+100);
    console.log(x+100);

}
add_numbers_1();
add_numbers_2();

