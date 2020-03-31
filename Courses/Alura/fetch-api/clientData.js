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

dataList().then(dataReceived => {
    dataReceived.forEach(indice => {
        console.log(indice);
        
        // i reorder just to test
        table.appendChild(showClient(indice.nome, indice.cpf));
    });  
})