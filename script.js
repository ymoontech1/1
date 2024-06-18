// JavaScript 코드
let count = 0;
const countButton = document.getElementById('countButton');
const countDisplay = document.getElementById('countDisplay');

countButton.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
});
