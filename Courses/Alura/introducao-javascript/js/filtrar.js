var filtrarBusca = document.querySelector("#filtrar");

filtrarBusca.addEventListener("input", function(){
    console.log(filtrarBusca.value.length);

    var paciente = document.querySelectorAll(".paciente");

    var expressao = new RegExp(filtrarBusca.value, "i");

    if(filtrarBusca.value.length) {
        paciente.forEach(function(paciente){
            var tdNome = paciente.querySelector(".info-nome").textContent;

            if(!expressao.test(tdNome)) {
                paciente.classList.add("esconder")
            } else {
                paciente.classList.remove("esconder")
            }
        });
    } else {
        paciente.forEach(function(paciente){
            paciente.classList.remove("esconder");
        });
    }
});