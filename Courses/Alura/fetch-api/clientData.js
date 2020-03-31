const clientData = [
    {
        cpf: 41539228894,
        name: "Eu mesmo"
    },
    {
        cpf: 41539228894,
        name: "Outro usuário"
    }
]

const table = document.querySelector("[data-table]");

const showClient = (cpf, name) => {
    const newLine = document.createElement('tr');
    
    const data = `
        <td>${cpf}</td>
        <td>${name}</td>
    `

    newLine.innerHTML = data;

    return newLine;
}

clientData.forEach(indice => {
    console.log(indice);
    
    table.appendChild(showClient(indice.cpf, indice.name));
});