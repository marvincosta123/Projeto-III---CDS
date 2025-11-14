// js/projetos.js
import { renderProjetoCard } from './templates.js';

export async function loadProjetos() {
    const grid = document.getElementById('projetos-grid');
    if (!grid) return; // Sai se o elemento não existir

    try {
        // 1. Busca os dados
        const response = await fetch('data/projetos.json');
        const projetos = await response.json();

        // 2. Gera o HTML usando o template
        let htmlProjetos = '';
        projetos.forEach(projeto => {
            htmlProjetos += renderProjetoCard(projeto);
        });

        // 3. Insere no DOM
        grid.innerHTML = htmlProjetos;

    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        grid.innerHTML = '<p class="alert alert-erro">Não foi possível carregar os projetos.</p>';
    }
}