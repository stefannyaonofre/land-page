import "../styles/style.scss";


document.addEventListener('DOMContentLoaded', () => {

});

const menuFeatures = document.getElementById('expand_less');
const menuFeatur = document.getElementById('expand_more');
const menuMostrar = document.getElementById('dropdown-menu');

const expandMore = document.getElementById('expand_moreCompany');
const expandLess = document.getElementById('expand_lessCompany');
const menuCompany = document.getElementById('dropdown-menuCompany');

menuFeatur.addEventListener('click', (e) => {
    e.preventDefault();

    menuFeatur.classList.add('hidden'); //oculta
    menuMostrar.classList.remove('hidden');//se le quita la clase hidden al menu que esta oculto
    menuFeatures.classList.remove('hidden');//para ocultar la flecha hacia arriba
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