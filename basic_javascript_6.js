function assignment() {
    var age, you_can;
    age= document.getElementById("age").Value;
    you_can = (age < 18) ? "too young":"you are old enough";
    document.getElementById("vote").innerHTML = you_can + " to vote.";
}

function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var jack = new vehicle("dodge", "viper", 2020, "red");
var emily = new vehicle("jeep", "trail hawk", 2019, "white and black");
var erik = new vehicle("ford", "pinto", 1971, "mustard");
function myfunction() {
    document.getElementById("keywords_and_constructors").innerHTML = 
    "erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model + "manufactured in" + erik.vehicle_year;
}

function nesting() {
    document.getElementById("nested_function").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_1() {starting += 1;}
        plus_1();
        return starting_point;
    }
}