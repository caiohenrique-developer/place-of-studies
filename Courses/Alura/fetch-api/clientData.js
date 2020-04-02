const removeClient = (id) => {
    if(confirm(`Deseja deletar o cliente?`)){
        dataDelete(id);
    }
}

const table = document.querySelector("[data-table]");

const showClient = (cpf, name, id) => {
    const newLine = document.createElement('tr');
    
    const data = `
        <td>${cpf}</td>
        <td>${name}</td>
        <button type="button" class="btn btn-danger" onClick="removeClient(${id})">Excluir</button>
    `

    newLine.innerHTML = data;

    return newLine;
}

dataList().then(dataReceived => {
    dataReceived.forEach(indice => {
        console.log(indice);
        
        table.appendChild(showClient(indice.cpf, indice.nome, indice.id));
    });  
})