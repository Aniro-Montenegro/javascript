// + , - , / , % , **

let n1=91
let n2=4
// OPERADORES ARITMETICOS

console.log("OPERADORES ARITMETICOS")
console.log(n1+n2);
console.log(n1-n2);
console.log(n1/n2);
console.log(n1*n2);
console.log(n1**n2);
console.log(n1%n2);

// OPERADORES DE ATRIBUICAO
console.log("OPERADORES DE ATRIBUICAO")
let n3= 11;

// n3=n3+3;
n3+=3;
console.log(n3);

n3-=3;
console.log(n3);

n3*=3;
console.log(n3);

n3/=3;
console.log(n3);

n3%=3;
console.log(n3);

n3**=3;
console.log(n3);


//OPERADORES INCREMENTO E DECREMENTO
console.log("OPERADORES INCREMENTO E DECREMENTO")
let i=5;
//i=i+1
//i+=1;

console.log(i++)
console.log(i)
i=10
console.log(i--)
console.log(i)
i=20
console.log(++i)
console.log(i)
i=30
console.log(--i)
console.log(i)


//OPERADORES DE COMPARAÇÃO

console.log("OPERADORES DE COMPARAÇÃO")
/**
 * IGUALDADE DE VALOR ==
 * IGUALDADE DE VALOR E TIPO ===
 * <,>,<=,>=
 * != VALORES DIFERENTES
 * !== VALORES E TIPOS DIFERENTES
 */

let x=10
let m=25
let y="10"
let h=false

console.log(x==y)
console.log(x===y)
console.log(m===x)
console.log(m==x)
console.log(m<x)
console.log(m<=x)
console.log(m>x)
console.log(m>=x)
console.log(x!=y)
console.log(x!==y)

// OPERADORES LOGICOS

console.log('OPERADORES LOGICOS')

// AND(&&) OR(||) NOT(!)


let v=false
let u=true
console.log(v&&u);
console.log(v||u);
console.log(!v);



let nota=10;
let passouAno=false;
let aprovadoFrequencia=false;
let boletinsAssinados=true;

passouAno= nota>=7 && aprovadoFrequencia==true && boletinsAssinados==true;

console.log(`O aluno foi aprovado: ${passouAno}`);

passouAno= nota>=7 ||( aprovadoFrequencia==true && boletinsAssinados==true);

console.log(`O aluno foi aprovado: ${passouAno}`);

passouAno= nota>=7 && ( aprovadoFrequencia==true && boletinsAssinados==true);

console.log(`O aluno foi aprovado: ${passouAno}`);


