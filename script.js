window.addEventListener("focusout", function(event) {
const x = document.getElementById("input1");
const y = document.getElementById("e1");
const z = document.getElementById("t1");
if(x.value === ""){ 
x.setAttribute("aria-describedby","e1");
x.setAttribute("aria-invalid","true");
z.textContent = "Lorem ipsum dolor sit amet.";
y.style.display = "block";
} else if
(x.value !== ""){ 
x.setAttribute("aria-describedby","");
x.setAttribute("aria-invalid","false");
z.textContent = "";
y.style.display = "none";
}







});

