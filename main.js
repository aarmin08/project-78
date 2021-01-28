var names_family = ["aarmin", "vikrant (Dad)", "sanghamitra (Mom)","vivika (sister)", "aarmin"];
var images_fam = ["Screenshot 2021-01-28 at 5.40.03 PM", "dad.png", "designer.png","girl.png", "boy.png"];

var currentImage = 0;
var currentName = 0;

function change() {
    currentImage += 1;
    currentName += 1;

    document.getElementById("image_book").src = images_fam[currentImage];
    document.getElementById("name").innerHTML = names_family[currentName];
}