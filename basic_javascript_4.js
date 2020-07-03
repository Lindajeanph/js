function dictionary() {
    var bird = {
        species: "parakeet",
        color: "green",
        type: "domestic",
        age: 1,
        sound: "chirp"
    };
    delete bird.color;
    document.getElementById("dictionary").innerHTML = bird.color;
}
