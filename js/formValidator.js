// js/formValidator.js

// Função principal de inicialização
export function initFormValidator() {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    // 1. Ouvinte de 'submit' (validação final)
    form.addEventListener('submit', (e) => {
        // Se o formulário não for válido, impede o envio
        if (!form.checkValidity()) {
            e.preventDefault();
            // Mostra erros em todos os campos
            Array.from(form.elements).forEach(input => checkInput(input));
        }
        // Em um app real, aqui você pegaria os dados e enviaria via fetch()
    });

    // 2. Ouvinte de 'input' (validação em tempo real)
    form.addEventListener('input', (e) => {
        const input = e.target;
        // Valida o campo específico que o usuário está digitando
        checkInput(input);
    });
}

// Verifica um input individual
function checkInput(input) {
    // Ignora botões ou fieldsets
    if (!input.name || input.type === 'submit') return;

    const errorMessageContainer = input.nextElementSibling;
    if (!errorMessageContainer || !errorMessageContainer.classList.contains('error-message')) {
        return;
    }

    const validity = input.validity;

    if (validity.valid) {
        // Se for válido, limpa o erro
        errorMessageContainer.textContent = '';
        input.classList.remove('invalid');
    } else {
        // Se for inválido, mostra a mensagem de erro correta
        input.classList.add('invalid');
        errorMessageContainer.textContent = getErrorMessage(input);
    }
}

// Retorna a mensagem de erro apropriada
function getErrorMessage(input) {
    const validity = input.validity;
    
    if (validity.valueMissing) {
        return 'Este campo é obrigatório.';
    }
    if (validity.typeMismatch) {
        return 'Por favor, insira um e-mail válido.';
    }
    if (validity.patternMismatch) {
        // Usa o 'title' do HTML para erros de padrão (CPF, CEP)
        return input.title || 'Formato inválido.';
    }
    if (validity.tooShort) {
        return `Deve ter no mínimo ${input.minLength} caracteres.`;
    }
    return 'Valor inválido.';
}