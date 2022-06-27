/* DESAFIO 1 */

const colaborador = {
  codigo: 25,
  nome: 'Spock'
};



/* DESAFIO 2 */

enum Ocupacao {
  Modelo,
  Mecanico
}

type Pessoa = {
  nome: string,
  idade: number,
  profissao: Ocupacao
}

let pessoa1: Pessoa = {
  nome: 'Livia',
  idade: 19,
  profissao: Ocupacao.Modelo
};

let pessoa2: Pessoa = {
  nome: 'Carlos',
  idade: 55,
  profissao: Ocupacao.Mecanico
};

let pessoa3: Pessoa = {
  nome: 'Maria',
  idade: 21,
  profissao: Ocupacao.Modelo
};

let pessoa4: Pessoa = {
  nome: "Joao",
  idade: 39,
  profissao: Ocupacao.Mecanico
}



/* DESAFIO 3 */

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
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
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
    limparSaldo();
});






