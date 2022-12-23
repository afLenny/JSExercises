// Ejercicio 2: 

// Diseñar una función que recibe como argumento dos cadenas de caracteres, 
// llamemoslas: muestra y palabra, deberá encontrar la menor subcadena de palabra 
// que contiene todos los caracteres de muestra. No se considera el orden de las letras, 
// solo que estén contenidas en la subcadena. Si se consideran las repeticiones: si busca taza no vale encontrar tza

// Un ejemplo:

// cadMinima('nasa', 'antesala')

// Devolverá antesa, es la menor subcadena que contiene nasa

// Si hay más de una posible salida devuelve la primera que encuentre

// cadMinima('nesa', 'antesala')

// Puede devolver  antes y tnsea, devolverá antes

function cadMinima(muestra,palabra){

    let index = 0;
    let search;
    let count = 0;
    let lookIndexLast = 0;
    let lookIndexFirst = 0;
    let lookup = muestra.split('');
    let loaded = palabra;
    let indexes = [];
    console.log(lookup);
    for(let i = 0; i < lookup.length; i++){
        // console.log(lookup[i]);

        // let regex = new RegExp(lookup[i], 'g');
        search = palabra.match(lookup[i]);
        index = palabra.indexOf(search);
        console.log(lookIndexLast);
        for(let j =0; j< indexes.length; j++){
            if(index === indexes[j]){
                console.log("repetido");
                loaded = loaded.slice(index+1);
                console.log(loaded);
                search = loaded.match(lookup[i]);
                index = loaded.indexOf(search)+1;
                break;
            }
        }
        // if(index === lookIndexFirst){
        //     console.log("Igual que el mas pequeño")
        //     loaded = loaded.slice(index+1);
        //     console.log(loaded);
        //     search = loaded.match(lookup[i]);
        //     index = loaded.indexOf(search) + 1;
        // }
        // else if(index === lookIndexLast){
        //     console.log("Igual que el mas grande")
        // }
        // loaded = loaded.slice(index);

        // if(loaded.includes(search)){
        //     console.log("a");
        //     index = palabra.indexOf(search,2);
        // }
        // else{
        //     index = palabra.indexOf(search);
        // }
        // result.push(loaded.slice(0,index+1));
        // loaded = loaded.split(search);
        // console.log(result);
        // loaded.toString();
        // console.log(loaded);
        indexes.push(index);
        console.log(indexes);
        
        if(i === 0) lookIndexFirst = index;
        if(lookIndexLast <= index){
            lookIndexLast = index;
            if(count > 0){
                lookIndexLast = lookIndexLast +count;
            }
        }
        else if(index <= lookIndexFirst){
            lookIndexFirst = index;
        }
        // console.log(search);


    }
    console.log(lookIndexFirst);
    console.log(lookIndexLast);
    palabra = palabra.slice(lookIndexFirst,lookIndexLast+1);
    return palabra;
}

console.log(cadMinima('nasa','antesala'));