// Input data saved here
const globalData = {
  entries: []
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

const $dayOfWeek = document.querySelector('select#day-of-week');
const $time = document.querySelector('select#time');
const $description = document.querySelector('textarea#description');

$submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  $modalContainer.classList.add('hidden');
  const entry = {};
  entry.date = $dayOfWeek.value;
  entry.time = $time.value;
  entry.description = $description.value;
  globalData.entries.push(entry);
  $form.reset();
});

const $dayButtons = document.querySelector('.day-buttons');
const $tdTime = document.querySelectorAll('td.time');
const $tdDescription = document.querySelectorAll('td.description');

function populateTable(day) {
  let tdIndex = 0;
  // clear the text content if any
  for (let i = 0; i < $tdTime.length; i++) {
    $tdTime[i].innerText = '';
    $tdDescription[i].innerText = '';
  }
  // populate the data
  for (let i = 0; i < globalData.entries.length; i++) {
    if (globalData.entries[i].date === day) {
      $tdTime[tdIndex].innerText = globalData.entries[i].time;
      $tdDescription[tdIndex].innerText = globalData.entries[i].description;
      tdIndex++;
    }
  }
}

$dayButtons.addEventListener('click', function (e) {
  if (event.target.className === 'sunday') {
    $scheduledEvent.textContent = 'Scheduled Event for Sunday';
    populateTable('sunday');

  }
  if (event.target.className === 'monday') {
    $scheduledEvent.textContent = 'Scheduled Event for Monday';
    populateTable('monday');
  }
  if (event.target.className === 'tuesday') {
    $scheduledEvent.textContent = 'Scheduled Event for Tuesday';
    populateTable('tuesday');
  }
  if (event.target.className === 'wednesday') {
    $scheduledEvent.textContent = 'Scheduled Event for Wednesday';
    populateTable('wednesday');
  }
  if (event.target.className === 'thursday') {
    $scheduledEvent.textContent = 'Scheduled Event for Thursday';
    populateTable('thursday');
  }
  if (event.target.className === 'friday') {
    $scheduledEvent.textContent = 'Scheduled Event for Friday';
    populateTable('friday');
  }
  if (event.target.className === 'saturday') {
    $scheduledEvent.textContent = 'Scheduled Event for Saturday';
    populateTable('saturday');
  }
});
