const url = new URL(window.location)

const id = url.searchParams.get('id')

const inputCpf = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

dataUpdate(id).then(data => {
    inputCpf.value = data[0].cpf;
    inputNome.value = data[0].nome;
})