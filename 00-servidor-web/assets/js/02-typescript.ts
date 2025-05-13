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