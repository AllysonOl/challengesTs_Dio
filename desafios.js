/* DESAFIO 1 */
var colaborador = {
    codigo: 25,
    nome: 'Spock'
};
/* DESAFIO 2 */
var Ocupacao;
(function (Ocupacao) {
    Ocupacao[Ocupacao["Modelo"] = 0] = "Modelo";
    Ocupacao[Ocupacao["Mecanico"] = 1] = "Mecanico";
})(Ocupacao || (Ocupacao = {}));
var pessoa1 = {
    nome: 'Livia',
    idade: 19,
    profissao: Ocupacao.Modelo
};
var pessoa2 = {
    nome: 'Carlos',
    idade: 55,
    profissao: Ocupacao.Mecanico
};
var pessoa3 = {
    nome: 'Maria',
    idade: 21,
    profissao: Ocupacao.Modelo
};
var pessoa4 = {
    nome: "Joao",
    idade: 39,
    profissao: Ocupacao.Mecanico
};
/* DESAFIO 3 */
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
