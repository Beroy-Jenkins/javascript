function valida(tr) {
    var s = ""
        , peso = tr.querySelector(".info-peso").textContent
        , altura = tr.querySelector(".info-altura").textContent
        , tdImc = tr.querySelector(".info-imc")
        ;

    if (peso <= 0 || peso >= 300) {
        s = " peso invalido";
    }
    if (altura <= 0 || altura >= 3.00) {
        s = s + " altura invalida";
    }

    if (s == "") {
        tdImc.textContent = (peso / (altura * altura)).toFixed(4);
    } else {
        tdImc.textContent = s;
        tr.classList.add("paciente-invalido");
    }
    return s;
}