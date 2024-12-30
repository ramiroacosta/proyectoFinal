class contador {
    static cuentaGlobal = 0;

    constructor(nombre) {
        this.nombre = nombre;
        this.cuentaIndividual = 0;
    }
    getResponsable(){
        return this.nombre;
    }
    contar(){
        contador.cuentaGlobal++
        this.cuentaIndividual++;
    }
    getCuentaIndividual(){
        return this.cuentaIndividual
    }
    static getCuentaGlobal(){
        return contador.cuentaGlobal
    }
}

const nuevoContador1 = new contador("ramiro")
const nuevoContador2 = new contador("candela")

nuevoContador1.contar();
nuevoContador1.contar();
nuevoContador2.contar();

console.log(`nombre de contador1: ${nuevoContador1.getResponsable()}`);
console.log(`cuenta individual contador1: ${nuevoContador1.getCuentaIndividual()}`);
console.log(`nombre de contador2: ${nuevoContador2.getResponsable()}`);
console.log(`cuenta individual contador 2: ${nuevoContador2.getCuentaIndividual()}`);
console.log(`cuenta global: ${contador.getCuentaGlobal()}`);
