// Ejercicio 3:

// Crear un función que a partir de una cadena de caracteres 
// genere todas las combinaciones de n caracteres que puedan 
// formarse con las letras de una cadena de caracteres.
// Una combinación  es un grupo con una parte de las letras de la cadena.
// La función recibe dos argumentos: una string con la lista de caracteres 
// y un número para indicar el ancho de las combinaciones.
// En las combinaciones generadas no importa el orden en que se coloquen 
// los caracteres. Es decir que acd es lo mismo que cda.

// Ejemplo:

// combinaciones("abcd", 3)  dará:

// abc - abd - acd - bcd

let result = [];
function combinaciones(string, number){
    string = string.split('');
    console.log(string);
    if(number === 1) return string;
    combine(string,"",number);
}

function combine(string,char,number,count){
    if(number == 0){
        return console.log(char);
    }
    let main = string[count];
    // console.log(main);
    for(let i = 0; i < string.length; i++){

        if(!char.includes(string[i])){
            let comb = char + string[i];
            result.push(comb);
            // console.log(comb);
            // console.log(char);
            combine(string,comb,number-1,string.indexOf(main)+1);
        }

    }
}

console.log(combinaciones("abcd", 3));