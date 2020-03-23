var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            document.querySelector("#erro-ajax").classList.add("esconder");
            var pacientes = JSON.parse(xhr.responseText)
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            document.querySelector("#erro-ajax").classList.remove("esconder");
            document.querySelector("#erro-ajax").setAttribute("id", "mensagem-erro");

            var status = xhr.status;

            console.log(status);
        }
    });

    xhr.send();
});