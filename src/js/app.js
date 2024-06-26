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

window.onscroll = function () { scrollFunction() };

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
document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('linkedin').addEventListener('click', function () {
    window.open("https://www.linkedin.com/company/ambprime/", "_blank");
  });
});


// MODAL
function openModal(content) {
  $('#modal-content').html(content);
  $('#myModal').css('display', 'block');
}

// Quando o usuário clicar fora do modal, feche-o
$(window).click(function (event) {
  if (event.target == $('#myModal')[0]) {
    $('#myModal').css('display', 'none');
  }
});


$('[data-service]').on('click', function (e) {
  e.preventDefault();
  var service = $(this).data('service'); // Obtém o atributo data-service do link clicado
  var content = '';


  // Verifica qual serviço foi clicado e atribui o conteúdo 
  switch (service) {
    case 'lp':
      content = ' <h2>Licença Prévia (LP)</h2> <p>A Licença Prévia (LP) é um documento que autoriza a viabilidade ambiental de um empreendimento ou atividade, indicando sua localização e concepção.</p>  <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Licença Prévia (LP)."><button>Fazer Orçamento</button></a>';
      break;

    case 'li':
      content = '<h2>Licença de Instalação (LI)</h2><p>A Licença de Instalação (LI) é um documento que autoriza o início da construção, montagem, instalação, ampliação, alteração ou reforma de um empreendimento.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Licença de Instalação (LI)."><button>Fazer Orçamento</button></a>';
      break;

    case 'lo':
      content = '<h2>Licença de Operação (LO)</h2><p>A Licença de Operação (LO) é um documento que autoriza o início das atividades de um empreendimento após a conclusão da construção, garantindo o cumprimento de normas ambientais, de saúde e segurança.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Licença de Operação (LO)."><button>Fazer Orçamento</button></a>';
      break;

    case 'renov':
      content = '<h2>Renovações de Licenças</h2><p>As Renovações de Licenças são processos que visam a manter as licenças ambientais válidas, atualizando-as de acordo com as mudanças nas atividades ou operações do empreendimento.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Renovações de Licenças."><button>Fazer Orçamento</button></a>';
      break;

    case 'daee':
      content = '<h2>Outorga de Captação/Lançamento DAEE</h2><p>A Outorga de Captação/Lançamento DAEE é uma autorização concedida pelo Departamento de Águas e Energia Elétrica (DAEE) para a captação de água ou lançamento de efluentes em corpos hídricos, garantindo o uso sustentável dos recursos hídricos.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Outorga de Captação/Lançamento DAEE."><button>Fazer Orçamento</button></a>';
      break;

    case 'ibama':
      content = '<h2>Cadastro IBAMA</h2><p>O Cadastro IBAMA é um registro obrigatório para empreendimentos que utilizam recursos naturais ou realizam atividades que possam impactar o meio ambiente, como agricultura, pecuária, indústria, etc. Ele é gerenciado pelo Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA) e visa a controlar e monitorar as atividades que possam afetar o meio ambiente.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Cadastro IBAMA."> <button>Fazer Orçamento</button></a>';
      break;

    case 'eia-rima':
      content = '<h2>Elaboração de estudos de impacto ambiental (EIA) e relatório de impacto ambiental (RIMA)</h2><p>A Elaboração de Estudos de Impacto Ambiental (EIA) e Relatório de Impacto Ambiental (RIMA) são processos que visam avaliar os impactos ambientais de um empreendimento ou atividade antes de sua implementação. O EIA é um estudo técnico que identifica, prevê e avalia os impactos ambientais positivos e negativos de um empreendimento ou atividade, enquanto o RIMA é um relatório que apresenta os resultados do EIA de forma resumida e acessível ao público. Esses processos são obrigatórios para empreendimentos que possam causar impactos ambientais significativos, de acordo com a legislação ambiental vigente. </p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Elaboração de estudos de impacto ambiental (EIA) e relatório de impacto ambiental (RIMA)."> <button>Fazer Orçamento</button></a>'
      break;

    case 'pgrs':
      content = '<h2>Elaboração de planos de gerenciamento de resíduos sólidos (PGRS)</h2><p>A Elaboração de Planos de Gerenciamento de Resíduos Sólidos (PGRS) é um processo que visa gerenciar os resíduos sólidos de forma sustentável e segura. O PGRS é um documento obrigatório para empreendimentos que geram resíduos sólidos.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Elaboração de estudos de impacto ambiental (EIA) e relatório de impacto ambiental (RIMA)."> <button>Fazer Orçamento</button></a>'
      break;

    case 'pca':
      content = '<h2>Elaboração de planos de controle ambiental (PCA)</h2><p>A Elaboração de Planos de Controle Ambiental (PCA) é um processo que visa prevenir e mitigar impactos ambientais negativos de um empreendimento ou atividade.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Elaboração de planos de controle ambiental (PCA)."> <button>Fazer Orçamento</button></a>'
      break;

    case 'prad':
      content = '<h2>Elaboração de planos de recuperação de áreas degradadas (PRAD)</h2><p>A Elaboração de Planos de Recuperação de Áreas Degradadas (PRAD) é um processo que visa recuperar áreas degradadas por atividades humanas. O PRAD é um documento obrigatório para empreendimentos que causarem impactos ambientais significativos.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Elaboração de planos de recuperação de áreas degradadas (PRAD)"> <button>Fazer Orçamento</button></a>'
      break;

    case 'ad':
      content = '<h2>Auditoria de diagnóstico (gap analysis)</h2><p>A Auditoria de Diagnóstico (Gap Analysis) é um processo que visa identificar as diferenças entre o desempenho atual e o desejado de um sistema ou processo, de acordo com os padrões estabelecidos. O Gap Analysis é um processo importante para a melhoria contínua de sistemas e processos.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Auditoria de diagnóstico (gap analysis)">'
      break;
    case 'cc':
      content = '<h2>Consultoria para implantação e certificação</h2><p>A Consultoria para Implantação e Certificação é um serviço que oferece apoio especializado para a implantação e certificação de sistemas de gestão, como ISO 9001, ISO 14001, entre outros.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Consultoria para implantação e certificação"> <button>Fazer Orçamento</button></a>'
      break;
    case 'ct':
      content = '<h2>Consultoria para transição</h2><p>A Consultoria para Transição é um serviço que oferece apoio especializado para a transição entre diferentes versões de um padrão ou sistema de gestão, como a transição da ISO 9001:2015 para a ISO 9001:2020.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Consultoria para transição"> <button>Fazer Orçamento</button></a>'
      break;
    case 'asp':
      content = '<h2>Auditoria de segunda parte (fornecedores)</h2><p>A Auditoria de Segunda Parte (Fornecedores) é um processo que avalia a conformidade dos fornecedores com os requisitos de qualidade, segurança e meio ambiente estabelecidos.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Auditoria de segunda parte (fornecedores)"> <button>Fazer Orçamento</button></a>'
      break;
    case 'ti':
      content = '<h2>Treinamento de interpretação</h2><p>O Treinamento de Interpretação é um serviço que fornece conhecimentos e habilidades para a correta interpretação de normas, legislações e padrões de qualidade, segurança e meio ambiente.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Treinamento de interpretação"> <button>Fazer Orçamento</button></a>'
      break;
    case 'tfai':
      content = '<h2>Treinamento para formação de auditor interno</h2><p>O Treinamento para Formação de Auditor Interno é um serviço que capacitou funcionários para realizar auditorias internas de qualidade, segurança e meio ambiente, de acordo com os padrões e normas estabelecidos.</p> <a href="https://api.whatsapp.com/send?phone=55112639-6632&text=Olá! Gostaria de fazer um orçamento para o serviço de Treinamento para formação de auditor interno"> <button>Fazer Orçamento</button></a>'
      break;

    default:
      content = 'Descrição não encontrada.';
  }

  openModal(content);
});


const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});



const form = document.querySelector('form');


form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Send email
  sendEmail();

  // Show modal
  modal.style.display = "block";

  // Close modal after 3 seconds
  setTimeout(() => {
    modal.style.display = "none";
  }, 3000);
});

// Close modal when clicking on the close button
const close = document.querySelector('.close');
close.addEventListener('click', () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}