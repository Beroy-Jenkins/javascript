var titulo = document.querySelector(".titulo")
    , pacientes = document.querySelectorAll(".paciente")
    ;
titulo.textContent = "Aparecida Nutricionista";
/*
for ( i = 0; i <= pacientes.length -1; i++) {
    var peso = pacientes[i].querySelector(".info-peso");
    console.log(peso.textContent);
    var altura = pacientes[i].querySelector(".info-altura");
    pacientes[i].querySelector(".info-imc").textContent = (peso.textContent / (altura.textContent * altura.textContent)); 
}
*/
for (i = 0; i <= pacientes.length - 1; i++) {
    valida(pacientes[i]);
}
//function valida(tr) {
//    var s = ""
//        , peso =tr.querySelector(".info-peso").textContent
//        , altura = tr.querySelector(".info-altura").textContent 
//        , tdImc = tr.querySelector(".info-imc")
//        ;

//    if (peso <= 0 || peso >= 300) {
//        s = " peso invalido";
//    }
//    if (altura <= 0 || altura >= 3.00) {
//        s = s + " altura invalida";
//    }

//    if (s == "") {
//        tdImc.textContent = (peso / (altura * altura)).toFixed(4);
//    } else {
//        tdImc.textContent = s;
//        tr.classList.add("paciente-invalido");
//    }
//    return s;
//}
//function addColum(pacienteTr, text, className) {
//    var td = document.createElement("td");
//    if (className != undefined && className != "") {
//        td.classList.add(className);
//    }
//    td.textContent = text;
//    pacienteTr.appendChild(td);
//}
//function valida1(peso, altura, tdImc) {
//    var result = true;
//    if (peso <= 0 || peso >= 300) {
//        tdImc.textContent = " peso invalido";
//        result = false;
//    }
//    if (altura <= 0 && altura >= 3.00) {
//        tdImc.textContent = tdImc.textContent + " altura invalida";
//        result = false;
//    }
//    return result;
//}
//for (i = 0; i < pacientes.length; i++) {
//    var paciente = pacientes[i];
//    var peso = paciente.querySelector(".info-peso").textContent;
//    //var tdPeso = paciente.querySelector(".info-peso");
//    //var peso = tdPeso.textContent;
//    var altura = paciente.querySelector(".info-altura").textContent;
//    var tdImc = paciente.querySelector(".info-imc");
//    var pesoEhValido = true;
//    var alturaEhValida = true;
//    if (peso <= 0 || peso >= 1000) {
//        console.log("Peso inválido!");
//        pesoEhValido = false;
//        tdImc.textContent = "Peso inválido";
//    }
//    if (altura <= 0 || altura >= 3.00) {
//        console.log("Altura inválida!");
//        alturaEhValida = false;
//        tdImc.textContent = "Altura inválida";
//    }
//    if (alturaEhValida && pesoEhValido) {
//        var imc = peso / (altura * altura);
//        tdImc.textContent = imc;
//    }
//}