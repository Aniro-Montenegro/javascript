//declarando variavel
var nome;
//atribuindo valor
nome="Nome"

//verificando o tipo
console.log(typeof nome)
//agrupando declaracoes
let cidade , populacao
cidade="Poá"
populacao=120000
console.log(typeof cidade,typeof populacao)

//Concatenação e interpolação

console.log('A cidade de '+cidade+' possui '+populacao+' habitantes')
console.log(`A cidade de ${cidade} possui ${populacao} habitantes`)

//Object

let curso={
    nome:"Banco de dados",
    valor:450.00,
    isActive:true
}

console.log(curso.nome)
curso.nome="Java"
console.log(curso.nome)
//Array 

let lista=[10,20,"Bola","Disco"]
console.log(lista[2])