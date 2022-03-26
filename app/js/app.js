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


  let findAlphabet = document.querySelector('.title_font');

  function fundElem (str) {
    const el = ["а", "о", "д"]
  }

  console.log(findAlphabet)

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
