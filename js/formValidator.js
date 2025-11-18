// js/formValidator.js

export function initFormValidator() {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
            // Mostra erros em todos os campos
            Array.from(form.elements).forEach(input => checkInput(input));
        } else {
            e.preventDefault(); // Impede envio real
            alert('Formulário enviado com sucesso! (simulação)');
        }
    });

    form.addEventListener('input', (e) => {
        const input = e.target;
        checkInput(input);
    });
}

function checkInput(input) {
    if (!input.name || input.type === 'submit') return;

    const errorMessageContainer = input.nextElementSibling;
    if (!errorMessageContainer || !errorMessageContainer.classList.contains('error-message')) {
        return;
    }

    const validity = input.validity;

    if (validity.valid) {
        errorMessageContainer.textContent = '';
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        errorMessageContainer.textContent = getErrorMessage(input);
    }
}

function getErrorMessage(input) {
    const validity = input.validity;
    
    if (validity.valueMissing) {
        return 'Este campo é obrigatório.';
    }
    if (validity.typeMismatch) {
        return 'Por favor, insira um e-mail válido.';
    }
    if (validity.patternMismatch) {
        return input.title || 'Formato inválido.';
    }
    if (validity.tooShort) {
        return `Deve ter no mínimo ${input.minLength} caracteres.`;
    }
    return 'Valor inválido.';
}
