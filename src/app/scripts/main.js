import "../styles/style.scss";

const menuContainer = document.querySelector('.menu__button');
const menuMovile = document.querySelector('.menu');
const moreFeacture = document.getElementById('more__feacture');
const lessFeacture = document.getElementById('less__feacture');
const menuFeacture = document.getElementById('menu__feacture');
const moreCompany = document.getElementById('more__company');
const lessCompany = document.getElementById('less__company');
const menuCompa = document.getElementById('menu__compa');
const menuFeatures = document.getElementById('expand_less');
const menuFeatur = document.getElementById('expand_more');
const menuMostrar = document.getElementById('dropdown-menu');
const expandMore = document.getElementById('expand_moreCompany');
const expandLess = document.getElementById('expand_lessCompany');
const menuCompany = document.getElementById('dropdown-menuCompany');

moreFeacture.addEventListener('click', (e) => {
    e.preventDefault();
    moreFeacture.classList.add('hidden');
    lessFeacture.classList.remove('hidden');
    menuFeacture.classList.remove('hidden');
});

lessFeacture.addEventListener('click', (e) => {
    e.preventDefault();
    moreFeacture.classList.remove('hidden');
    lessFeacture.classList.add('hidden');
    menuFeacture.classList.add('hidden');
});

moreCompany.addEventListener('click', (e) => {
    e.preventDefault();
    moreCompany.classList.add('hidden');
    lessCompany.classList.remove('hidden');
    menuCompa.classList.remove('hidden');
});

lessCompany.addEventListener('click', (e) => {
    e.preventDefault();
    moreCompany.classList.remove('hidden');
    lessCompany.classList.add('hidden');
    menuCompa.classList.add('hidden');
});

menuFeatur.addEventListener('click', (e) => {
    e.preventDefault();
    menuFeatur.classList.add('hidden');
    menuMostrar.classList.remove('hidden');
    menuFeatures.classList.remove('hidden');
});

menuFeatures.addEventListener('click', (e) => {
    e.preventDefault();
    menuFeatur.classList.remove('hidden'); 
    menuMostrar.classList.add('hidden');
    menuFeatures.classList.add('hidden');
});

expandMore.addEventListener('click', (e) => {
    e.preventDefault();
    expandMore.classList.add('hidden'); 
    expandLess.classList.remove('hidden');
    menuCompany.classList.remove('hidden');
});

expandLess.addEventListener('click', (e) => {
    e.preventDefault();
    expandMore.classList.remove('hidden'); 
    expandLess.classList.add('hidden');
    menuCompany.classList.add('hidden');
});

menuContainer.addEventListener('click', () => {
    menuMovile.classList.add('active');
})