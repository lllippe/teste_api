window.onload = function() {
    
    carregaNome();
    

    numeroUm = document.getElementById("valor_um");
    numeroDois = document.getElementById("valor_dois");

    document.getElementById("botao_somar").onclick = function() {
        calcula(this.id, numeroUm, numeroDois)
    }
    document.getElementById("botao_subtrair").onclick = function() {
        calcula(this.id, numeroUm, numeroDois)
    }
    document.getElementById("botao_multiplicar").onclick = function() {
        calcula(this.id, numeroUm, numeroDois)
    }
    document.getElementById("botao_dividir").onclick = function() {
        calcula(this.id, numeroUm, numeroDois)
    }

    function calcula (obj, numeroUm, numeroDois) {
        switch (obj){
            case "botao_somar":
                operacao = parseFloat(numeroUm.value)+parseFloat(numeroDois.value);
                break;
            case "botao_subtrair":
                operacao = parseFloat(numeroUm.value)-parseFloat(numeroDois.value);
                break;
            case "botao_multiplicar":
                operacao = parseFloat(numeroUm.value)*parseFloat(numeroDois.value);
                break;
            case "botao_dividir":
                operacao = parseFloat(numeroUm.value)/parseFloat(numeroDois.value);
                break;
        }
        resultado(operacao);
    }

    function resultado(resultado){
        document.getElementById("resultado").innerHTML = "Resultado da operação: " + resultado;
    }

    //window.document.getElementById('um').onclick = function()
    //{
    //    informacao();
    //}

    //window.document.getElementById('dois').onclick = function()
    //{
    //    carregaNome();
    //}
}

function aluno(nome,idade,curso){
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
}

var pedro = new aluno("Pedro", 15, "EC");

console.log(pedro.curso);

function informacao(){
    var nome = window.prompt("Digite :");
    window.alert(nome)
};
function carregaNome(){
    //window.document.getElementById('impacta').value = "Felipe"
}