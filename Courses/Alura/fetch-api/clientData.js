fetch('http://localhost:4000/clientes')
.then(response => {
    return response.json();
}).then(teste => {
    console.log(teste);
})


// const table = document.querySelector("[data-table]");

// const showClient = (cpf, name) => {
//     const newLine = document.createElement('tr');
    
//     const data = `
//         <td>${cpf}</td>
//         <td>${name}</td>
//     `

//     newLine.innerHTML = data;

//     return newLine;
// }

// clientData.forEach(indice => {
//     console.log(indice);
    
//     table.appendChild(showClient(indice.cpf, indice.name));
// });