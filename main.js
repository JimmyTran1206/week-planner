// Input data saved here
const globalData = {
  entry: []
};
/// ////////////////////////
const $submitButton = document.querySelector('.submit');
const $modalContainer = document.querySelector('.modal-container');
const $addEntryButton = document.querySelector('.add-entry');
const $form = document.querySelector('form.add-entry-form');

$addEntryButton.addEventListener('click', function () {
  $modalContainer.classList.remove('hidden');
});

$submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  $modalContainer.classList.add('hidden');

});

const $dayButtons = document.querySelector('.row day-buttons');

$dayButtons.addEventListener('click', () => {
  if (event.target.className === 'sunday') {

  }

});
