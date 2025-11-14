// js/router.js
import { loadProjetos } from './projetos.js';
import { initFormValidator } from './formValidator.js';

// 1. Mapeia hashes para os arquivos HTML
const routes = {
    '/': 'pages/home.html',
    '/projetos': 'pages/projetos.html',
    '/cadastro': 'pages/cadastro.html',
};

// 2. Mapeia hashes para funções JS específicas da página
const pageInitFunctions = {
    '/projetos': loadProjetos,     // Carrega os cards de projeto
    '/cadastro': initFormValidator // Inicializa a validação do formulário
};

// 3. O "coração" do roteador
async function handleLocation() {
    const path = location.hash.replace('#', '') || '/';
    const routeHtml = routes[path] || routes['/']; // Pega o arquivo HTML (ou 'home' como padrão)
    
    // Carrega o fragmento HTML
    const response = await fetch(routeHtml);
    const html = await response.text();
    
    // Injeta o HTML no 'app-root'
    document.getElementById('app-root').innerHTML = html;

    // Executa a função JS específica para essa página (se existir)
    if (pageInitFunctions[path]) {
        pageInitFunctions[path]();
    }
}

// 4. Inicializador do roteador
export function initRouter() {
    // Lida com a mudança de hash (cliques nos links)
    window.addEventListener('hashchange', handleLocation);
    // Lida com o carregamento inicial da página
    window.addEventListener('load', handleLocation);
}