// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	var slider = tns({
    container: '.results_slider',
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

})
