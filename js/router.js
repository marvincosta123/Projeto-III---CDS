// js/router.js
import { loadProjetos } from './projetos.js';
import { initFormValidator } from './formValidator.js';

const routes = {
    '/': 'pages/home.html',
    '/projetos': 'pages/projetos.html',
    '/cadastro': 'pages/cadastro.html',
};

const pageInitFunctions = {
    '/projetos': loadProjetos,
    '/cadastro': initFormValidator
};

async function handleLocation() {
    const path = location.hash.replace('#', '') || '/';
    const routeHtml = routes[path] || routes['/'];
    
    try {
        const response = await fetch(routeHtml);
        if (!response.ok) {
            throw new Error('Página não encontrada');
        }
        const html = await response.text();
        document.getElementById('app-root').innerHTML = html;

        if (pageInitFunctions[path]) {
            pageInitFunctions[path]();
        }
    } catch (error) {
        document.getElementById('app-root').innerHTML = `<h1>Erro 404</h1><p>Página não encontrada.</p>`;
        console.error(error);
    }
}

export function initRouter() {
    window.addEventListener('hashchange', handleLocation);
    window.addEventListener('load', handleLocation);
    
    // Assegura que a página inicial seja carregada
    if (!location.hash) {
        location.hash = '#/';
    }
    handleLocation();
}
