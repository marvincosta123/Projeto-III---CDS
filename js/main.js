// js/main.js
import { initRouter } from './router.js';

// Ao carregar o DOM, inicializa o roteador
document.addEventListener('DOMContentLoaded', () => {
    initRouter();
});

// Lógica do menu hambúrguer (da Entrega II)
const btnMenu = document.querySelector('.menu-hamburguer-btn');
const navMenu = document.querySelector('.nav-principal');

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
});

// Fecha o menu mobile ao clicar em um link
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('ativo');
    }
});
