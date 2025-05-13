console.log("Hola TypeScript");
// var nombre = "algo"; NO SE VA A USAR NUNCA VAR, AUNQUE ES PARECEIDO A LET
var nombres = "Martin";
nombres = "A";
nombres = 'C';
// nombres = 2;
var nombreTS = "Martin"; // TS
console.log(typeof nombres, "nombres"); // string
var numeros = 1;
var numerosTS = 1; // TS
console.log(typeof numeros, "numeros"); // number
numeros = 1.1; //Decimales
console.log(typeof numeros, "numeros decimales"); // number
var booleanos = true;
var booleanoTS = false; // TS
booleanos = false;
console.log(typeof booleanos, "booleanos"); // boolean
var nulos = null;
var nuloTS = null; // TS
console.log(typeof nulos, "nulos"); // object
var arreglos = [1, 2, 3];
var arregloTS = [1, 2, 3]; // TS
var arregloTS2 = []; // TS
console.log(typeof arreglos, "arreglos"); // object
var objetos = {};
var objetoTS = {}; // TS
console.log(typeof objetos, "objetos"); // object
var undefineds = undefined;
var undefinedTS = undefined; // TS
console.log(typeof undefineds, "undefineds"); // undefined
// Truty y Falsy
var trutyFalsy;
trutyFalsy = "";
if (trutyFalsy) { // ""
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = "a";
if (trutyFalsy) { // "a"
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = -1;
if (trutyFalsy) { // -1
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = 1;
if (trutyFalsy) { // 1
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = null;
if (trutyFalsy) { // null
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = {};
if (trutyFalsy) { // {}
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = [];
if (trutyFalsy) { // []
    console.log("Truty");
}
else {
    console.log("Falsy");
}
