// js/projetos.js
import { renderProjetoCard } from './templates.js';

export async function loadProjetos() {
    const grid = document.getElementById('projetos-grid');
    if (!grid) return;

    try {
        const response = await fetch('data/projetos.json');
        const projetos = await response.json();

        let htmlProjetos = '';
        projetos.forEach(projeto => {
            htmlProjetos += renderProjetoCard(projeto);
        });

        grid.innerHTML = htmlProjetos;

    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        grid.innerHTML = '<p class="alert alert-erro">Não foi possível carregar os projetos.</p>';
    }
}
