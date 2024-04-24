/* Creating variable for the toggle switch and container for both HTML form and blogpost*/
const themeSwitcher = document.querySelector('#mode-switcher');
const container = document.querySelector('.container');

/* Setting default load into dark */
let mode = 'dark';

/* Adding event listener to the switcher to change the background color*/
themeSwitcher.addEventListener('click', function () {
  /* If mode is dark change to light background */
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  /* If mode is light change to dark background */
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});