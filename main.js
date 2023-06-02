const $submitButton = document.querySelector('.submit');
const $modalContainer = document.querySelector('.modal-container');
const $addEntryButton = document.querySelector('.add-entry');

$addEntryButton.addEventListener('click', function () {
  $modalContainer.style.display = 'flex';
});

$submitButton.addEventListener('click', function () {
  $modalContainer.style.display = 'none';
});
