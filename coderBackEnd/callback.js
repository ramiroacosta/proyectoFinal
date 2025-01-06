//ejemplo callbacks

let valoresOriginales = [1,2,3,4]

let nuevosValores = valoresOriginales.map(x => "a")
console.log(nuevosValores);

const mapCallback = (valor)=>{
    if (valor % 2 === 0) {
        return valor
    }else {
        return "no es par"
    }
}
const evaluarPares = valoresOriginales.map(mapCallback)
console.log(evaluarPares);

//sumar y todo eso

const sumar = (num1, num2)=> num1 + num2
const resta = (num1, num2)=> num1 - num2
const dividir = (num1, num2)=> num1 * num2
const multipicamos = (num1, num2)=> num1 / num2

const realizarOperacion = (num1,num2, callback) => {
    console.log(`voy a realiazr operacion: ${callback}`);
    let result = callback(num1,num2)
    return result
}

console.log("suma ", realizarOperacion(5, 2, sumar));

