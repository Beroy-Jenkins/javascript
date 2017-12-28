var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")
        , pacienteTr = document.createElement("tr")
        , table = document.querySelector("#tabela-pacientes")
        , test;
        ;

    addColum(pacienteTr, form.nome.value);
    addColum(pacienteTr, form.peso.value, "info-peso");
    addColum(pacienteTr, form.altura.value, "info-altura");
    addColum(pacienteTr, form.gordura.value);
    addColum(pacienteTr, "", "info-imc");

    //if (valida(pacienteTr) != "") {
    //    if (valida(pacienteTr) = " peso invalido") {
    //        form.peso.textContent = " peso invalido";
    //    }
    //    else if (valida(pacienteTr) = " altura invalida") {
    //        form.peso.textContent = " altura invalida";
    //    }
    //    return;
    //}

    test = valida(pacienteTr);
    if (test != "") {
        if (test.indexOf(" peso invalido") > -1) {
            form.peso.value = " peso invalido";
        }
        if (test.indexOf(" altura invalida") > -1) {
            form.altura.value = " altura invalida";
        }
     return;
    }


    table.appendChild(pacienteTr);

});
function addColum(pacienteTr, text, className) {
    var td = document.createElement("td");
    if (className != undefined && className != "") {
        td.classList.add(className);
    }
    td.textContent = text;
    pacienteTr.appendChild(td);
}
