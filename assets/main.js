
document.addEventListener("DOMContentLoaded", function () {
var sliderCounter = 0;
var sliderContent = [
  "COSTA.",
  "@GBCOSTAF."

];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  
  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");
  
  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 4000);

    // Adicione uma classe ao menu quando a página carregar
    document.querySelector('.navbar').classList.add('navbar-transparent');

    // Obtenha a posição da seção de projetos
    var projetosPosition = document.getElementById('projetos').offsetTop;

    // Obtenha uma lista de todas as divs com a classe .social-ft
    var socialFtElements = document.querySelectorAll('.social-ft');

    // Adicione um evento de rolagem à página
    window.addEventListener("scroll", function () {
        // Obtenha a posição atual da rolagem
        var scrollPosition = window.scrollY;

        // Se a rolagem estiver abaixo da posição da seção de projetos
        if (scrollPosition >= projetosPosition) {
            // Iterar sobre todas as divs com a classe .social-ft e adicionar a classe 'social-ft-branco'
            socialFtElements.forEach(function (socialFt) {
                socialFt.classList.add('social-ft-branco');
            });

             // Altere o letter-spacing do título no footer
            document.querySelector('footer h3').style.letterSpacing = '0px';

            // Restante do código para mudar as classes e cores conforme necessário
            document.querySelector('.link-logo').classList.add('link-logo-branco');

            document.querySelectorAll('.nav-link').forEach(function(link) {
                link.style.color = 'white';
            });

            document.querySelector('.link-logo p').style.color = 'white';
            document.querySelector('footer h3').style.color = 'white';
        } else {
            // Iterar sobre todas as divs com a classe .social-ft e remover a classe 'social-ft-branco'
            socialFtElements.forEach(function (socialFt) {
                socialFt.classList.remove('social-ft-branco');
            });

            // Remova a borda do footer
            document.querySelector('footer').style.borderTop = 'none';

            // Remova a borda da navbar
            document.querySelector('.navbar').style.borderBottom = 'none';

            // Restante do código para manter as classes e cores originais
            document.querySelector('.link-logo').classList.remove('link-logo-branco');

            document.querySelectorAll('.nav-link').forEach(function(link) {
                link.style.color = '';
            });

            document.querySelector('.link-logo p').style.color = '';
            document.querySelector('footer h3').style.color = '';

            // Restaure o letter-spacing original do título no footer
            document.querySelector('footer h3').style.letterSpacing = ''; // Volte ao valor original (pode ser definido no seu CSS)
        }
    });
});


  document.addEventListener("DOMContentLoaded", function () {
  var bolaAzul = document.querySelector('.bola-azul');
  var scrollBx = document.querySelector('.scroll-bx');

  bolaAzul.addEventListener('mouseover', function () {
    scrollBx.classList.add('active');
  });

  // Aguarde 2000 milissegundos (2 segundos) e, em seguida, adicione a classe
  setTimeout(function () {
    scrollBx.classList.add('border-transform');
  }, 2000);
});
document.addEventListener("DOMContentLoaded", function () {
  var bolaAzul = document.querySelector('.bola-azul');
  var vejaJ = document.querySelector('.veja-j');

  bolaAzul.addEventListener('mouseover', function () {
    vejaJ.style.opacity = '1';
  });

  bolaAzul.addEventListener('mouseout', function () {
    vejaJ.style.opacity = '0';
  });

  bolaAzul.addEventListener('click', function () {
    // Toggle: se a opacidade for 0, definir para 1; caso contrário, definir para 0.
    vejaJ.style.opacity = vejaJ.style.opacity === '0' ? '1' : '0';
  });
});


$(document).ready(function () {
    "use strict";
  
    // Scroll back to top
  
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > offset) {
        $('.progress-wrap').addClass('active-progress');
      } else {
        $('.progress-wrap').removeClass('active-progress');
      }
    });
    $('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    });
    
  });
  
