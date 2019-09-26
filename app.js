document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function(){

    const menu = document.querySelector(".menu");
    const btn = document.querySelector(".menu-toggle");

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        menu.classList.toggle("show");
    })

});

function myFunction(x) {
    x.classList.toggle("change");
}