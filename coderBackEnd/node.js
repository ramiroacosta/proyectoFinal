// mini proyecto con node y js


const generarnumerosrandom = ()=>{ 
    return new Promise((resolve, reject) => {
        try {
            let numeros = []  
            for (let i = 0; i < 10; i++) {
                numeros.push(Math.floor(Math.random() * 20) +1)
            } 
            resolve(numeros)
        } catch (error) {
            reject(error)
        }
        
    })
}

const contadorfrecuencias = (numeros)=>{    
    return new Promise((resolve, reject) => {
        try {
            let obj = {}
            numeros.forEach(numero => {
                if (!obj[numero]) {
                    obj[numero] = 1
                }else{
                    obj[numero]++
                }
            });
            resolve(obj)
        } catch (error) {
            reject(error)
        }
    })
}

const main = async (params) => {
    try {
        //generador de numeros
        const numeros = await generarnumerosrandom() 
        console.log(numeros);
        
        //contar las frecuencias
        const result = await contadorfrecuencias(numeros)
        console.log(result);
        
    } catch (error) {
        console.error("ocurrio un error");
        
    }
}

main();
