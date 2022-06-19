var filterPopup = document.querySelector('.filter__popup');
var filterButton = document.querySelector('.filter__button');
var filterButtonTitle = document.querySelector('.filter__button-title');
var filterButtonImage = document.querySelector('.filter__button-image');
var filterButtonPopup = document.querySelectorAll('.filter__popup-button');
var filterPopupMenu = document.querySelectorAll('.filter__popup-menu');



filterButton.addEventListener('click', function () {
    filterPopup.classList.toggle('visually-hidden');
    filterButtonTitle.classList.toggle('filter__button-title--active');

    if (filterButtonImage.getAttribute('src') === 'img/filter-dropdown.svg') {
        filterButtonImage.setAttribute('src', 'img/filter-dropdown-pink.svg');
    } else {
        filterButtonImage.setAttribute('src', 'img/filter-dropdown.svg');
    }
});

/*filterButtonPopup.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.classList.contains('filter__popup-button--disable')) {
            button.classList.remove('filter__popup-button--disable');
            button.classList.remove('filter__popup-button--active');
        }
        classlist.toggle("visually-hidden")
    })
});*/


/*navClose.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navOpen.classList.remove('page-header__menu-open--disable');
    }
  });*/