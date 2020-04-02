const dataList = () => {
    return fetch('http://localhost:4000/clientes')
    .then(response => {
        return response.json();
    }).then(test => {
        console.log(test);
        
        return test;
    })
}

const dataPost = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })

    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    })
    .then(response => {
        return response.body
    })
}