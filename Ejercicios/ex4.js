// Ejercicio 4:

// Diseñar una función que compruebe si un array está ordenado en orden ascendente de sus componentes, 
// es decir, que cada elemento es superior o igual al anterior e inferior o igual al siguiente, o si solo tiene un elemento
// La función tiene como único argumento la lista a comprobar y devolverá true si está ordenada o false en caso contrario.

// Por ejemplo:

// ordenAsc([1,2,3,6,7,19])      //true

// ordenAsc([12,2,9,6,7,19])    //false

// ordenAsc([4])                         //true

function ordenAsc(array){
    if(array.length <= 1){
        return true;
    }
    for(let i =0; i< array.length; i++){
        for(let j = 1; j< array.length; j++){ 
            if(array[i] >= array[j]){ 
                return false;
            }
            else{
                return true;
            }
        }
    }
}

console.log(ordenAsc([1,2,3,6,7,19]));