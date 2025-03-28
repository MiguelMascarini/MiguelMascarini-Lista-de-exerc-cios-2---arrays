function concatArrays(array1, array2) {
    return array1.concat(array2);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 8);


const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');


const menuPrincipal = ['Hambúrguer', 'Pizza', 'Lasanha'];
const menuDeSobremesas = ['Sorvete', 'Pudim', 'Bolo'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);


console.log("Array concatenado:", concatArrays([1, 2, 3], [4, 5, 6]));
console.log("Parte dos números:", parteNumeros);
console.log("Frutas atualizadas:", frutas);
console.log("Menu completo:", menuCompleto);
