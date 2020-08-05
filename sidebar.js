document.addEventListener("DOMContentLoaded", init);
function init() {
   
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    document.getElementById('test-btn').onclick = function () {
      sidebar.classList.toggle('sidebar_small');
      mainContent.classList.toggle('main-content_large')
    }
    document.getElementById('test-btn').addEventListener("click", () => {
      let visibilityFull = document.getElementById('visibility-full');
      let visibilitySmall = document.getElementById('visibility-small');

      if (visibilityFull.classList.contains('d-block')) {
        visibilityFull.classList.remove('d-block');
        visibilityFull.classList.add('d-none');
        visibilitySmall.classList.remove('d-none');
      } else {
        visibilityFull.classList.add('d-block');
        visibilityFull.classList.remove('d-none');
        visibilitySmall.classList.add('d-none');
      }

    })


    document.getElementById('dropdown-favorite').addEventListener("click", () => {
      let favoriteOff = document.querySelector('#favoriteoff-svg');
      let favoriteOn = document.querySelector('#favoriteon-svg');
      let dropdownFavorite = document.querySelector('#dropdown-menu-favorite');
      
      dropdownFavorite.classList.toggle('d-none');
      favoriteOff.classList.toggle('d-none');
      favoriteOn.classList.toggle('d-block');
    })

    document.getElementById('dropdown-visited').addEventListener("click", () => {
      let visitedOff = document.querySelector('#visitedoff-svg');
      let visitedOn = document.querySelector('#visitedon-svg');
      let dropdownVisited = document.querySelector('#dropdown-menu-visited');

      dropdownVisited.classList.toggle('d-none');
      visitedOff.classList.toggle('d-none');
      visitedOn.classList.toggle('d-block');

    })


    document.getElementById('test-btn').addEventListener("click", () => {
      let textFull = document.getElementById('text-full');
      let textSmall = document.getElementById('text-small');


      if (textFull.classList.contains('d-block')) {
        textFull.classList.remove('d-block');
        textFull.classList.add('d-none');
        textSmall.classList.remove('d-none');
      } else {
        textFull.classList.add('d-block');
        textFull.classList.remove('d-none');
        textSmall.classList.add('d-none');
      }

    })
    document.getElementById('test-btn').addEventListener("click", () => {
      let btnOn = document.getElementById('btn-on');
      let btnOff = document.getElementById('btn-off');


      if (btnOn.classList.contains('d-block')) {
        btnOn.classList.remove('d-block');
        btnOn.classList.add('d-none');
        btnOff.classList.remove('d-none');
      } else {
        btnOn.classList.add('d-block');
        btnOn.classList.remove('d-none');
        btnOff.classList.add('d-none');
      }

    })
 
}