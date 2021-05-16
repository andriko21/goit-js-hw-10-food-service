import './styles.css';
import menuFoods from './menu.json'
import receptTpl from './templates/recept_card.hbs'


document.querySelector('.js-menu').insertAdjacentHTML('beforeend', menuFoods.reduce((acc , card) => acc += receptTpl(card),''));
