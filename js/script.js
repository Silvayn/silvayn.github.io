let win = $(window),
foo = $('#typer');
foo.typer(['Développeur Web PHP', 'Développeur FullStack JavaScript']);

$(function(){
/* SMOOTH SCROLL */
$('.js-scrollTo').on('click', function() { // Au clic sur un élément
  let page = $(this).attr('href'); // Page cible
  let speed = 750; // Durée de l'animation (en ms)
  $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
  return false;
});

/* FIXED NAVBAR */
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('.navbar-fixed-top').addClass('black');
  }else {
    $('.navbar-fixed-top').removeClass('black');
  }
})

/* OPEN NAV */
$('.openbtn').click(function(){
  $('#mySidenav').css('width', '250px').css('cursor', 'pointer');
  $('.navbar-fixed-top').hide();

});

/* CLOSE NAV */
$('.closebtn').click(function(){
  $('#mySidenav').css('width', '0');
  $('.navbar-fixed-top').show();
});

/* IMGAGE THIMBNAIL */
$('.item-description').hide();
var toggleDescription = function(){
  $(this).find('.item-description').toggle();
}
$('.item-thumbnail').mouseenter(toggleDescription).mouseleave(toggleDescription);

});


// PARTICULES JS
const particlesJSON = {
  "particles": {
      "number": {
          "value": 40,
          "density": {
              "enable": true,
              "value_area": 500
          }
      },
      "color": {
          "value": "#ccc"//gris
      },
      "shape": {
          "type": "polygon",
          "stroke": {
              "width": 2,
              "color": "#ccc"//gris
          },
          "polygon": {
              "nb_sides": 6
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 0.5,
          "random": true
      },
      "size": {
          "value": 10,
          "random": true
      },
      "line_linked": {
          "enable": false,
          "distance": 200,
          "color": "#ccc",//gris
          "opacity": 0.3,
          "width": 2
      },
      "move": {
          "enable": true,
          "speed": 5,
          "direction": "bottom",
          "random": true,
          "straight": true,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": [
                  "grab",
                  "bubble"
              ]
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 0.7
              }
          },
          "bubble": {
              "distance": 600,
              "size": 12,
              "duration": 1,
              "opacity": 0.8,
              "speed": 2
          },
          "repulse": {
              "distance": 400,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 20
          },
          "remove": {
              "particles_nb": 10
          }
      }
  },
  "retina_detect": true
}

particlesJS("particles-js", particlesJSON)

