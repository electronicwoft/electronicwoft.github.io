window.onload = function() {
toggle = 0;
const w = document.getElementById("__xmlview16--Gender-label");
const x = document.getElementById("__xmlview16--Gender");
const y = document.getElementById("__list80");
const z = y.children;
let p = z.textContent

x.addEventListener("click", function() {
if(toggle === 0) {
show();
toggle = 1;
} else if
(toggle === 1){
hide();
toggle = 0;
}
});

window.addEventListener("keydown", function(e) {

if(e.target === x ) {
if(e.altKey && e.which === 40 && toggle === 0) {
show();
toggle = 1;
}
}








if(e.target === x ) {
if((e.which === 27 || event.which === 9) && toggle === 1) {
hide();
toggle = 0;
}
}






});









function show() {
x.setAttribute("aria-expanded","true");
y.style.display = "block";
z[0].focus();
}
function hide() {
x.setAttribute("aria-expanded","false");
y.style.display = "none";
}


};