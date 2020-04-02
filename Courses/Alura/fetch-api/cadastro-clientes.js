const formCadastraCliente = document.querySelector('[data-form]');

formCadastraCliente.addEventListener("submit", event => {
    event.preventDefault();

    const nome = event.target.querySelector('[data-nome]').value;
    const cpf = event.target.querySelector('[data-cpf]').value;

    var button = document.querySelector('form button');
    
    if (validaCPF(cpf)) {
        dataPost(nome, cpf);
        
        setTimeout(() => {
            button.style.display = 'none';

            setTimeout(() => {
                const span = document.createElement('span');

                span.textContent = 'Mensagem enviada!'

                span.style.color = 'green'

                button.after(span);
            }, 500);
        }, 500);
    } else {
        alert('CPF inválido!')
        
        setTimeout(() => {
            const span = document.createElement('span');

            span.textContent = 'CPF inválido!'

            span.style.color = 'red'

            button.after(span);
        }, 500);
    }
});