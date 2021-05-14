import './styles.css';
import menuFoods from './menu.json'
import receptTpl from './templates/recept_card.hbs'

const menuRefs = {
  menu: menuFoods,
}

const menuMarkup = receptTpl(menuRefs);

document.querySelector('.js-menu').innerHTML = menuMarkup;
