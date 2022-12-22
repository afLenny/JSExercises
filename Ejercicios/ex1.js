// Dado un conjunto de enteros positivos (que llamaremos lista) y un entero (que llamaremos suma). 
// Se trata de encontrar si existe algún subconjunto de lista cuyos componentes suman el valor de suma

// La idea es resolverlo mediante una función recursiva. 

// Ejemplos de la función:

// existeSuma([3,4,2,8,7], 6)   -> true   

// existeSuma([3,4,2,8,7], 26)   -> false   

// existeSuma([4],  4)   -> true  

function existeSuma(array,total,count){
    if(array.length ==1){
        if(array == total){
            return true;
        }
        else{
            return false;
        }
    }
    // console.log(array.length);
    if(count == array.length-1){
        return  false;
    }
    let main = array[count];
    // console.log(array.indexOf(main));
    for(let i = 0; i< array.length; i++){
        if(array.indexOf(main) != array.indexOf(array[i])){
            // console.log(main, array[i]);
            let suma = main + array[i];
            // console.log(suma);
            if(suma === total)
            {
                return true;
            }
 
        }
    }

    return existeSuma(array,total,array.indexOf(main)+1);

}

console.log(existeSuma([3,4,2,8,7], 6,0));