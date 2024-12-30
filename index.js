
const array = [1,2,3,4]
function mostrarLista(array) {
    
    for (const element of array) {
        console.log(element);
    }
    if (array.length) {
        return "lista esta vacia"
    }
    return `tamaño del array: ${array.length}`
}

let resutlado1 = mostrarLista([]);
console.log(resutlado1);

let resutlado2 = mostrarLista(array);
console.log(resutlado2);
