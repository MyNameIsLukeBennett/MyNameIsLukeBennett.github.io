
document.getElementById("guzzy-goblin").style.color = "green";


document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});


let elements = document.getElementsByClassName("text");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "blue";
}
