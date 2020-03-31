const clientData = [
    {
        cpf: 41539228894,
        nome: "Eu mesmo"
    }
]

const newLine = `
<tr>
    <td>${clientData[0].cpf}</td>
    <td>${clientData[0].nome}</td>
</tr>`

const table = document.querySelector("[data-table]");

table.innerHTML = newLine;