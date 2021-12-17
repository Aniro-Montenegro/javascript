

// string number(int,floats) boolean
// undefined, null symbol(ES2015)

let minhaVar="Minha var string";

let minhaVar2= 'Minha outra var string';

let minhaVar3= `Mais uma string template literal`;

console.log(minhaVar);
console.log(minhaVar2);
console.log(minhaVar3);

let idade=40;

let minhaIdade="Eu tenho "+idade+" anos";
let minhaIdade2='Eu tenho '+idade+' anos'; 
let minhaIdade3=`Eu tenho ${idade} anos`;


console.log(minhaIdade);
console.log(minhaIdade2);
console.log(minhaIdade3);

let usoAspas="Uso possivel de 'aspas'";
let usoAspas2='Uso possivel de "aspas"';

console.log(usoAspas);
console.log(usoAspas2);

console.log("typeof");

console.log(typeof usoAspas);


const n1=100;
const n2=3.5;

console.log(`o tipo de n1 é ${typeof n1} e seu valor= ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor= ${n2}`);

const x= n1+n2;
console.log(`n1 + n2 = ${x}`);

const b= n1-n2;
console.log(`n1 - n2 = ${b}`);

const c= n1*n2;
console.log(`n1 x n2 = ${c}`);

const d= n1/n2;
console.log(`n1 / n2 = ${d}`);

const e= n1%n2;
console.log(`n1 % n2 = ${e}`);

const isValid=false;
console.log(isValid);
console.log(!isValid);


let varTeste;
console.log(varTeste);
console.log(typeof varTeste);
varTeste=10;
console.log(typeof varTeste,varTeste);


let varTeste2=null;
console.log(varTeste2);
console.log(typeof varTeste2);
varTeste=20;
console.log(typeof varTeste,varTeste);