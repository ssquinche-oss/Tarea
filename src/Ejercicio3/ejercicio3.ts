class CuentaBancaria {
    private saldo: number = 0;
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    depositar(monto: number) {
        if (monto > 0) {
            this.saldo += monto;
            console.log("Depósito realizado: " + monto);
        } else {
            console.log("El monto debe ser positivo");
        }
    }
    mostrarSaldo() {
        console.log("Saldo actual: " + this.saldo);
    }
}
// Ejemplo
let cuenta1 = new CuentaBancaria(200);

cuenta1.mostrarSaldo();  // Saldo actual: 200
cuenta1.depositar(50);    // Depósito realizado: 50
cuenta1.mostrarSaldo();  // Saldo actual: 250
