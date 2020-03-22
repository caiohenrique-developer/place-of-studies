var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var userInfo = getUserInfo(form);

    var pacienteTr = montaTr(userInfo);

    var erro = validaPaciente(userInfo);
    
    if(erro.length > 0) {
        exibeMensagensDeErro(erro);
        return;
    }
    
    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
    
    form.reset();

    var mensagensErro = document.querySelector("#mensagem-erro");

    mensagensErro.innerHTML = "";
});

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function exibeMensagensDeErro(erro) {
    var ul = document.querySelector("#mensagem-erro");

    ul.innerHTML = "";

    erro.forEach(function(erros) {
        var li = document.createElement("li");
        li.textContent = erros;
        ul.appendChild(li);
    });
}

function getUserInfo(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }

    return paciente;
}

function validaPaciente(paciente) {
    var mensagemErro = [];

    if(paciente.nome.length == 0) mensagemErro.push("O campo do nome não pode estar vazio!")
    if(paciente.gordura.length == 0) mensagemErro.push("O campo gordura não pode estar vazio!")
    if(!validaPeso(paciente.peso)) mensagemErro.push("Peso inválido");
    if(!validaAltura(paciente.altura)) mensagemErro.push("Altura inválida");

    return mensagemErro;
}