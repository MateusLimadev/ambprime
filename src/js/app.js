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


// MODAL
function openModal(content) {
    $('#modal-content').html(content);
    $('#myModal').css('display', 'block');
  }
  
  // Quando o usuário clicar fora do modal, feche-o
  $(window).click(function(event) {
    if (event.target == $('#myModal')[0]) {
      $('#myModal').css('display', 'none');
    }
  });
  

$('[data-service]').on('click', function(e) {
    e.preventDefault(); 
    var service = $(this).data('service'); // Obtém o atributo data-service do link clicado
    var content = ''; 
    
 
    // Verifica qual serviço foi clicado e atribui o conteúdo apropriado
    switch(service) {
      case 'lp':
        content = ' <h2>Licença Prévia (LP)</h2> <p>A Licença Prévia (LP) é um documento que autoriza a viabilidade ambiental de um empreendimento ou atividade, indicando sua localização e concepção.</p> <button>Fazer Orçamento</button>';
        break;
      case 'li':
        content = '<h2>Licença de Instalação (LI)</h2><p>A Licença de Instalação (LI) é um documento que autoriza o início da construção, montagem, instalação, ampliação, alteração ou reforma de um empreendimento.</p> <button>Fazer Orçamento</button>';
        break;
      case 'lo':
        content = '<h2>Licença de Operação (LO)</h2><p>A Licença de Operação (LO) é um documento que autoriza o início das atividades de um empreendimento após a conclusão da construção, garantindo o cumprimento de normas ambientais, de saúde e segurança.</p> <button>Fazer Orçamento</button>';  
        break;

      default:
        content = 'Descrição não encontrada.';
    }
  
    openModal(content); 
  });
  