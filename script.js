window.onload = function() {

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const d = document.getElementById("d1");

b1.onclick = function() {
d.style.display = "block";
d.focus();
}

b2.onclick = function() {
d.style.display = "none";
document.focus();
}



};