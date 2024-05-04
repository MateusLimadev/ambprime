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


// Função para abrir o modal com as informações
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
  
  // Ao clicar em um item da lista, exiba o modal com as informações relevantes
  $('ul li a').click(function(e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    var service = $(this).data('service'); // Obtém o atributo data-service do link clicado
    var content = ''; // Aqui você adicionará o conteúdo do modal com base no serviço clicado
  
    // Verifica qual serviço foi clicado e atribui o conteúdo apropriado
    switch(service) {
      case 'lp':
        content = 'A Licença Prévia (LP) é um documento que autoriza a viabilidade ambiental de um empreendimento ou atividade, indicando sua localização e concepção.';
        break;
      case 'li':
        content = 'A Licença de Instalação (LI) é um documento que autoriza o início da construção, montagem, instalação, ampliação, alteração ou reforma de um empreendimento.';
        break;
      // Adicione os casos para os outros serviços aqui
      default:
        content = 'Descrição não encontrada.';
    }
  
    openModal(content); // Abre o modal com o conteúdo correspondente
  });
  