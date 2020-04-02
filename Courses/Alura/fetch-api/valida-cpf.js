function verificaCPF(cpf) {
    const cpfInvalido = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000"
    ]

    return cpfInvalido.indexOf(cpf) === -1
}

function somaNumerosCPF(cpf, totalDigitos, peso) {
    let soma = 0;

    for(let indice = 1; indice <= totalDigitos; indice++) {
        soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice)
    }

    return soma;
}