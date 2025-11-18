// js/templates.js

// Recebe um objeto 'projeto' e retorna o HTML do card
export function renderProjetoCard(projeto) {
    // Adapte as classes (col-desktop-4) para seu grid
    return `
        <div class="card col-12 col-tablet-6 col-desktop-4">
            <div class="card-imagem">
                <img src="${projeto.img}" alt="${projeto.titulo}">
            </div>
            <div class="card-conteudo">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="#" class="btn btn-primario">Saiba Mais</a>
            </div>
        </div>
    `;
}
