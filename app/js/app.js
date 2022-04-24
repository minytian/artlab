// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

// tiny Slider

document.addEventListener('DOMContentLoaded', () => {

  var slider = tns({
    container: '.review_slider',
    speed: 400,
    mouseDrag: true,
    slideBy: 'page',
    navPosition: 'bottom',
    prevButton: '#tns_btn_prev',
    nextButton: '#tns_btn_next',
    controlsText: false,
    responsive: {
      768: {
        gutter: 30,
        items: 1
      },
      860: {
        edgePadding: 30
      },
      1200: {
        items: 2
      }
    }
  });


  let form_title_color = document.querySelector('.form_title');
  // let form_title_text = form_title_color.innerHTML;
  form_title_color.innerHTML = `СТУ<span class="blueColor">Д</span>И<span class="redColor">Я</span> РИС<span class="yellowColor">О</span>ВаНИ<span class="blueColor">Я</span> <span class="yellowColor">Д</span>Л<span class="blueColor">Я</span> <span class="redColor">Д</span>ЕТЕЙ И ВЗР<span class="yellowColor">О</span>СЛЫХ`

//   for(let i = 0; i < form_title_text.length; i++) {
//     let art = form_title_text[i];

//     if (art === 'д') {
//       // art.style.color = "#ffffff";
//       form_title_color.innerHTML = "<span>д</span"

// // console.log(art)
//     } 
//     if (art === 'о') {
//       // art.style.color = "#ffffff";
//     }
//     if (art === 'я') {
//       // art.style.color = "#ffffff";
//     } 
//   }

})

// Gallery

baguetteBox.run('.gallery_directions', {
    captions: true
});

baguetteBox.run('.gallery_results', {
    captions: true
});

// Modal window 

let modalOverlay = document.querySelector(".modal-overlay");
let modalContent = document.querySelector(".modal");
let modalButton = document.querySelector(".menu_adress");
let modalClose = document.querySelector(".close-modal");

modalButton.addEventListener('click', modal_open)
modalClose.addEventListener('click', modal_close)

function modal_open () {
  modalOverlay.classList.add("active")
  modalContent.classList.add("active")
}

function modal_close (event) {
  modalOverlay.classList.remove("active")
  modalContent.classList.remove("active")
}


