const dividirPromesas = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`promesas divisor: ${dividendo} / ${divisor}`);
        setTimeout(() => {
            if (divisor === 0) {
                reject("no se puede dividir por cero")
            }else{
                resolve(dividendo/divisor)
            }
        }, 2000);
        
    })
}
const dividirPromesas2 = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`promesas divisor: ${dividendo} / ${divisor}`);
        if (divisor === 0) {
            reject("no se puede dividir por cero")
        }else{
            resolve(dividendo/divisor)
        }
    })
}
const funcionAsincronica = async (a, b) => {
    try {
        let resultado = await dividirPromesas(a, b) 
        let resultado2 = await dividirPromesas2(a, resultado) 
        console.log(resultado2);
        
    } catch (error) {
        
    }
}

funcionAsincronica(2,5)
console.log("hola");
