function toggleMenu() {
    var navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');

    var hamburguer = document.getElementById('hamburguer');
    hamburguer.classList.toggle('active');

    var bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('cross');
    });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

// Scroll suave para o topo
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera 
}

//Redirecionamento de Links
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('linkedin').addEventListener('click', function(){
        window.open("https://www.linkedin.com/company/ambprime/", "_blank");
    });
});



