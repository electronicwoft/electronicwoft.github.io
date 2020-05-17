window.onload = function() {

toggle = 0;

const b1 = document.getElementById("b1");
const s1 = document.getElementById("s1");
const i1 = document.getElementById("i1");
const l1 = document.getElementById("l1");

window.addEventListener("click", function(e) {
if(e.target === b1) {
show();
}
});
function show() {
if(toggle === 0) {
b1.setAttribute("aria-expanded","true");
s1.style.display ="block";
s1.style.width = "20vw";
}
}

window.addEventListener("input", function(e) {
if(e.target === i1) {
l1.style.display = "block";

}
});
window.addEventListener("keydown", function(e) {
if(e.which === 27) {
alert();
}
});




};