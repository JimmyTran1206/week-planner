// Input data saved here
const globalData = {
  entry: []
};
/// ////////////////////////
const $submitButton = document.querySelector('.submit');
const $modalContainer = document.querySelector('.modal-container');
const $addEntryButton = document.querySelector('.add-entry');
const $form = document.querySelector('form.add-entry-form');
const $scheduledEvent = document.querySelector('.scheduled-event');

$addEntryButton.addEventListener('click', function () {
  $modalContainer.classList.remove('hidden');
});

$submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  $modalContainer.classList.add('hidden');

});

const $dayButtons = document.querySelector('.day-buttons');

$dayButtons.addEventListener('click', function (e) {
  if (event.target.className === 'sunday') {
    $scheduledEvent.textContent = 'Scheduled Event for Sunday';
  }
  if (event.target.className === 'monday') {
    $scheduledEvent.textContent = 'Scheduled Event for Monday';
  }
  if (event.target.className === 'tuesday') {
    $scheduledEvent.textContent = 'Scheduled Event for Tuesday';
  }
  if (event.target.className === 'wednesday') {
    $scheduledEvent.textContent = 'Scheduled Event for Wednesday';
  }
  if (event.target.className === 'thursday') {
    $scheduledEvent.textContent = 'Scheduled Event for Thursday';
  }
  if (event.target.className === 'friday') {
    $scheduledEvent.textContent = 'Scheduled Event for Friday';
  }
  if (event.target.className === 'saturday') {
    $scheduledEvent.textContent = 'Scheduled Event for Saturday';
  }
});
