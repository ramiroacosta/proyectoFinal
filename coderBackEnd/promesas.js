// ejemplos promesas

const dividirPromesas = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`promesas divisor: ${dividendo} / ${divisor}`);
        if (divisor === 0) {
            reject("no se puede dividir por cero")
        }else{
            resolve(dividendo/divisor)
        }
    })
}

//console.log("resultado", dividirPromesas(2,5));

dividirPromesas(2,0)
.then(resultado => console.log(resultado))
.catch(error =>console.log(error))

    