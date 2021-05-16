import './styles.css';
import menuFoods from './menu.json';
import receptTpl from './templates/recept_card.hbs';

document.querySelector('.js-menu').insertAdjacentHTML(
  'beforeend',
  menuFoods.map(menuFood => receptTpl(menuFood)).join(''),
);

const themeRefs = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxSwitcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

function switcherTheme(event) {
  body.setAttribute(
    'class',
    body.classList.contains(themeRefs.DARK) ? themeRefs.LIGHT : themeRefs.DARK,
  );
  // console.log(body.classList.contains(Theme.DARK))
  localStorage.setItem('theme', body.classList.value);
}
//
checkboxSwitcher.addEventListener('change', switcherTheme);

currentTheme();

function currentTheme(event) {
  body.setAttribute(
    'class',
    localStorage.getItem('theme') === null
      ? themeRefs.LIGHT
      : localStorage.getItem('theme'),
  );
  if (localStorage.getItem('theme') === themeRefs.DARK) {
    checkboxSwitcher.checked = 'true';
  }
}
