const url = new URL(window.location)

const id = url.searchParams.get('id')

const inputCpf = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

dataUpdate(id).then(data => {
    inputCpf.value = data[0].cpf;
    inputNome.value = data[0].nome;
})

const formEdition = document.querySelector('[data-form]');

formEdition.addEventListener('submit', event => {
    event.preventDefault();
    
    if(!validaCPF(inputCpf.value)) {
        alert('Este CPF não existe');
        // return;
    } else {
        event.preventDefault();
        
        editaCliente(id, inputCpf.value, inputNome.value)

        var button = document.querySelector('form button');
        
        button.style.display = 'none';

        setTimeout(() => {
            const span = document.createElement('span');

            span.textContent = 'Mensagem enviada!'

            span.style.color = 'green'

            button.after(span);
        }, 500);
    }
});