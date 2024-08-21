document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var modal = document.getElementById("showcase-modal");
var btn = document.getElementById("more-info-btn");
var span = document.getElementsByClassName("close-btn")[0];
btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display ="none";
    }
}
// script.js
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

