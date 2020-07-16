
function assignment() {
    var age, you_can;
    age= document.getElementById("age").value;
    you_can = (age < 18) ? "too young":"you are old enough";
    document.getElementById("vote").innerHTML = you_can + " to vote.";
}

function vehicle(make, model, year, color) {
    this.vehicle_make = make;           //KEYWORDS AND CONSTRUCTORS//
    this.vehicle_model = model;
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

function phone(type, model, color) {
    this.phone_type = type;
    this.phone_model = model;
    this.phone_color = color;
}
var verizon = new phone("iphone", "XR", "rosegold");
var sprint = new phone("android", "galaxy", "white");               //my phone example//
function cellphone() {
    document.getElementById("new_and_this").innerHTML =
    "sprint also has the " + verizon.phone_type + " in green";
}

function countingfunction() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_1() {starting_point += 1;}
        plus_1();
        return starting_point;
    }
}