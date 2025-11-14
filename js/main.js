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