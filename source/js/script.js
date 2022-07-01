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

/*filterButtonPopup.addEventListener('click', function () {
    filterPopupMenu.classList.toggle('visually-hidden');
    filterButtonPopup.classList.toggle('filter__popup-button--active');
    /*if (filterButtonImage.getAttribute('src') === 'img/filter-dropdown.svg') {
        filterButtonImage.setAttribute('src', 'img/filter-dropdown-pink.svg');
    } else {
        filterButtonImage.setAttribute('src', 'img/filter-dropdown.svg');
    }
});*/

filterButtonPopup.forEach(function (button) {
    button.addEventListener('click', function () {
        button.classList.toggle('filter__popup-button--active');
    })
});

/*let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});*/
