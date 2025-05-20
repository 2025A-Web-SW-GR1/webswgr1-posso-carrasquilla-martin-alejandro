console.log("Hola TypeScript");

// var nombre = "algo"; NO SE VA A USAR NUNCA VAR, AUNQUE ES PARECEIDO A LET
let nombres = "Martin";
nombres = "A";
nombres = 'C';
// nombres = 2;
let nombreTS: string = "Martin"; // TS
console.log(typeof nombres, "nombres"); // string

let numeros = 1;
let numerosTS: number = 1; // TS
console.log(typeof numeros, "numeros"); // number
numeros = 1.1; //Decimales
console.log(typeof numeros, "numeros decimales"); // number

let booleanos = true;
let booleanoTS: boolean = false; // TS
booleanos = false;
console.log(typeof booleanos, "booleanos"); // boolean

let nulos = null;
let nuloTS: null = null; // TS
console.log(typeof nulos, "nulos"); // object

let arreglos = [1, 2, 3];
let arregloTS: number[] = [1, 2, 3]; // TS
let arregloTS2: Array<number>[] = []; // TS
console.log(typeof arreglos, "arreglos"); // object

let objetos = {};
let objetoTS: object = {}; // TS
console.log(typeof objetos, "objetos"); // object

let undefineds = undefined;
let undefinedTS: undefined = undefined; // TS
console.log(typeof undefineds, "undefineds"); // undefined



// Truty y Falsy
let trutyFalsy:any;
trutyFalsy = "";
if(trutyFalsy){ // ""
    console.log("Truty");
}else{
    console.log("Falsy");
}

trutyFalsy = "a";
if(trutyFalsy){// "a"
    console.log("Truty");
}else{
    console.log("Falsy");
}

trutyFalsy = -1;
if(trutyFalsy){ // -1
    console.log("Truty");
}else{
    console.log("Falsy");
}

trutyFalsy = 1;
if(trutyFalsy){ // 1
    console.log("Truty");
}else{
    console.log("Falsy");
}

trutyFalsy = null;
if(trutyFalsy){ // null
    console.log("Truty");
}else{
    console.log("Falsy");
}

trutyFalsy = {};
if(trutyFalsy){ // {}
    console.log("Truty");
}else{
    console.log("Falsy");
}

trutyFalsy = [];
if(trutyFalsy){ // []
    console.log("Truty");
}else{
    console.log("Falsy");
}



// Objetos
const martin:any = {
    "nombre": "Martin",
    'apellido': 'Posso',
    edad: 30,
    hijos: 1,
    casado: true,
    zapatos: undefined,
    ropa:{
        color: "rojo",
        talla: 40
    },
    mascotas: ['Cache', 'Peque', 'Pandi']
};

console.log(martin, "martin");

//Acceder a las propiedades
martin.nombre = "Martin";
martin["apellido"]
//Modificar (reasignar)
martin.nombre = "Juan";
martin["nombre"] = "Juan";
// martin = {}; esto da un ERROR
//Crear atributos
martin.sueldo = 1.4;
martin["gastos"] = 0.8;
//Eliminar atributos
martin.nombre = undefined;
delete martin.nombre;

//Variables por valor o por referencia

//Variables por valor
// Todas las primitivas:
// number, string, boolean
let edadMartin = 21;
let edadKevin = edadMartin; // COLNANDO el primitivo son variables independientes
console.log(edadMartin); // 21
console.log(edadKevin); // 21
edadMartin = edadMartin + 1;
console.log(edadMartin); // 22
console.log(edadKevin); // 21

//Varibles por referencia
// Object: {} []
let notas = {
    total: 10,
};
let notas2doBim = notas; //REFERENCIA
notas2doBim.total =  notas2doBim.total + 1;
console.log(notas); // total: 11
console.log(notas2doBim); // total: 11
// Como clonamos objetos o arrays
let notasClonadasUno = Object.assign({}, notas); // Clonando objetos, ahora son objetos independientes
let arregloACopiar = [1, 2, 3];
let arregloClonado = Object.assign([], arregloACopiar); // Clonando arreglo
notasClonadasUno.total = notasClonadasUno.total + 1;
console.log(notas); // total: 11
console.log(notas2doBim); // total: 11
console.log(notasClonadasUno); // total: 12





// Arreglos
const arregloEjemplo = [1, 2, 3, 4, 5];
// for of
for (let valorDeArreglo of arregloEjemplo) {
    console.log('Valor: ', valorDeArreglo);
}

// for in (obtenemos el indice)
for (let indiceDeArreglo in arregloEjemplo) {
    console.log('Indice: ', indiceDeArreglo);
    console.log('Valor: ', arregloEjemplo[indiceDeArreglo]);
}

// Añadir al FINAL un elemento
arregloEjemplo.push(6); // [1, 2, 3, 4, 5, 6]

//Eliminar el ULTIMO elemento
arregloEjemplo.pop(); // [1, 2, 3, 4, 5]

// Añadir un elemento al INICIO del arreglo
arregloEjemplo.unshift(0); // [0, 1, 2, 3, 4, 5]

// Eliminar el PRIMER elemento
arregloEjemplo.shift(); // [1, 2, 3, 4, 5]

// Eliminar  y agregar un elemento en una posicion especifica
// splice - indice donde empezar
//        - cantidad de elementos a eliminar
//        - elementos a agregar

arregloEjemplo.splice(2, 3, 10, 11, 12); // [1, 2, 10, 11, 12]
// eliminados 3, 4, 5
// agregados 10, 11, 12
// [1, 2, 3, 4, 5] -> [1, 2, 10, 11, 12]

// Operadores para trabajar con arreglos
// find
// findindex
// foreach
// map
// filter
// some
// every
// reduce
// sort


// Funciones
function soloNumeros(a, b, c){
    return a + b + c;
}

function soloNumerosTS(a: number, b: number, c: number): number{
    return a + b + c;
}  

function soloImprimir(texto: string): void{
    console.log(texto);
}   

function soloImprimir2(texto: string): undefined{
    console.log(texto);
}

// Funcoines nombresdas
function nombreDeMiFuncion(){}

//Funciones anonimas
const funcionSinNombre = function(){}

nombreDeMiFuncion();
funcionSinNombre();

[].forEach(function(){});

//Funciones Fat Arrow
const funcionFlecha = (
    a:number, b:number
):number => { return a+b };

const funcionFlechaSinParametros = () => { 
    console.log("Sin Parametros");
};

const functionFAOmitirReturn = (a:number, b:number) => a + b;
const unSoloParametroSinParentesis = a => a * a;

//Parametros infinitos
function sumarNumeros(...todosNumeros:number[]):number{
    let total = 0;
    for (let valornumero of todosNumeros) {
        total += valornumero;
    }
    return total
}
sumarNumeros(1, 2, 3, 4, 5, 1, 2, 3, 4, 5); // 30


// Destructuracion de objetos
const martinDestructurado = {
    nombre: "Martin",
};

const kevinDescructurado = {
    nombre: "Kevin",
    apellido: "Villacis"
};

//merge de las dos variables (el order SI importa)
const martinKevinDestructurado = {
    ...martinDestructurado,
    ...kevinDescructurado
};

// {nombre: "Kevin", apellido: "Villacis"}

const kevinMartinDestructurado = {
    ...kevinDescructurado,
    ...martinDestructurado
};
// {nombre: "Martin", apellido: "Villacis"}

const overrideDestructurado = {
    ...kevinDescructurado,
    ...martinDestructurado,
    nombre: "Jose"
};
// {nombre: "Jose", apellido: "Villacis"}

// Destructuracion de arreglos
const arregloDestructurado = [1, 2, 3];
const arregloDestructurado2 = [4, 5, 6];
//Merge
const arregloDestructurado12 = [
    ...arregloDestructurado,
    ...arregloDestructurado2
];
// [1, 2, 3, 4, 5, 6]

// La destructuracion  es una forma de clonar objetos y arreglos
const objetoAcopiar = { a:1 };
const objetoCopiado = { ...objetoAcopiar };
