const formCadastraCliente = document.querySelector('[data-form]');

formCadastraCliente.addEventListener("submit", event => {
    event.preventDefault();

    const nome = event.target.querySelector('[data-nome]');
    const cpf = event.target.querySelector('[data-cpf]');

    dataPost(nome.value, cpf.value);

    setTimeout(() => {
        var button = document.querySelector('form button');

        button.style.display = 'none';

        setTimeout(() => {
            const span = document.createElement('span');

            span.textContent = 'Mensagem enviada!'

            span.style.color = 'green'

            button.after(span);
        }, 500);
    }, 500);
});