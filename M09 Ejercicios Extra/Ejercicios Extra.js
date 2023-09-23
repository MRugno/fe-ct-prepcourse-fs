/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayDeArrays=[];
   for(prop in objeto){
      var array = [prop, objeto[prop]];
      arrayDeArrays.push(array);
   }
   return arrayDeArrays;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var array = string.split("");
   array.sort();
   var letra= array[0];
   var objeto={};
   objeto[array[0]]=0;
   array.forEach(element => {
      if(element===letra){
         objeto[element]+=1
      }else{
         objeto[element]=1;
         letra=element;
      }
   });
   return(objeto);
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var array= string.split("");
   var nuevoArray=[];
   array.forEach(element=>{
      if(element===element.toUpperCase()){
         nuevoArray.push(element);
      }
   }); 
   array.forEach(element=>{
      if(element===element.toLowerCase()){
         nuevoArray.push(element);
      }
   });
   return(nuevoArray.join(""));
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var array = frase.split(" ");
   var fraseEspejo=[];
   array.forEach(element=>{
      fraseEspejo.push(element.split("").reverse().join(""));
   });
   return(fraseEspejo.join(" "));


}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var string=numero.toString();
   var array=string.split("");

   if(string===array.reverse().join("")){
      return "Es capicua";
   } return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array= string.split("");
   array=array.filter(n=> n!=="a" && n!=="b" && n!=="c");
   return(array.join(""));
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var matriz=[];
   for(i=0;i<arrayOfStrings.length;i++){
      matriz[i]=[arrayOfStrings[i].length,arrayOfStrings[i]];
   };
   matriz.sort((a, b) => a[0] - b[0]);
   var resultado=[];
   for(i=0;i<matriz.length;i++){
      resultado.push(matriz[i][1]);
   };
  return(resultado);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArreglo=[];
   if(array1.length>=array2.length){
      array1.forEach(element=>{
         if((array2.includes(element))&&(!nuevoArreglo.includes(element))){
            nuevoArreglo.push(element);
         }
      });
   } else {
      array2.forEach(element=>{
         if((array1.includes(element))&&(!nuevoArreglo.includes(element))){
            nuevoArreglo.push(element);
         }
      });
   }
   return(nuevoArreglo);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
