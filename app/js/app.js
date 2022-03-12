// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

  var slider = tns({
    container: '.review_slider',
    items: 2,
    speed: 400,
    mouseDrag: true,
    slideBy: 'page',
    navPosition: 'bottom',
    controlsText: ["🠨", "🠪"],
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
      },
      700: {
        gutter: 40
      },
      900: {
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

baguetteBox.run('.gallery_directions', {
    captions: true
});

baguetteBox.run('.gallery_results', {
    captions: true
});