dataList = () => {
    return fetch('http://localhost:4000/clientes')
    .then(response => {
        return response.json();
    }).then(test => {
        console.log(test);
        
        return test;
    })
}