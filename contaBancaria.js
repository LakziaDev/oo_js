class ContaBancaria {
    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso! Saldo atual: R$${this.saldo}`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente!');
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso! Saldo atual: R$${this.saldo}`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

// Criando uma nova conta bancária
const minhaConta = new ContaBancaria(678910, 'Pedro Henrique Oliveira', 2000);

// Consultando o saldo inicial
minhaConta.consultarSaldo();

// Realizando um depósito
minhaConta.depositar(500);

// Realizando um saque
minhaConta.sacar(200);

// Tentando sacar um valor maior que o saldo
minhaConta.sacar(2000);

// Consultando o saldo final
minhaConta.consultarSaldo();

