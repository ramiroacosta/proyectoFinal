class auto {
    constructor(color, marca) {
        this.color = color;
        this.marca = marca;
    }
    frenar(){
        return "se frena el auto"
    }
    acelerar(){
        return `se acelera el auto de color ${this.color}`
    }
}
const nuevoAuto1 = new auto('negro', "ford");
const nuevoAuto2 = new auto('azul', "ford");
const nuevoAuto3 = new auto('amarillo', "tesla");

console.log(nuevoAuto1);
console.log(nuevoAuto2);
console.log(nuevoAuto3);

console.log(nuevoAuto1.acelerar());
