x="9"
z=10
a=x+z
console.log(a)

a="9"
b=10
c=Number(a)+b
console.log(c)

let string="545"
let numero=145
console.log(Number(string))
console.log(String(numero))

let concatenacao=string+String(numero)
let soma= Number(string)+numero
console.log(concatenacao)
console.log(soma)

let frase="A função da oração não é influenciar Deus, mas especialmente mudar a natureza daquele que ora."

console.log(frase.length)
console.log(frase.split("d"))
console.log(frase.replace("f","F"))
console.log(frase.includes("d"))
console.log(frase.repeat(2))

let valor=155454.56456456
console.log(valor.toFixed(3))

console.log(frase.toUpperCase())
console.log(frase.toLowerCase())

let lista= frase.split(" ")
console.log(lista)
let juncao=lista.join("_")
console.log(juncao)

let lista_numeros= Array(10,5,12,5,6)
console.log(lista_numeros)

let variavel=Array.from(juncao)
console.log(variavel)

let cidades=["Poá","Suzano","Ferraz"]
console.log(cidades)
cidades.push("Jacareí")
console.log(cidades)
cidades.pop("Jacareí")
console.log(cidades)
cidades.unshift("São José dos Campos")
console.log(cidades)
cidades.shift()
console.log(cidades)
cidades.pop()
console.log(cidades)
cidades.push("Jacareí")
cidades.unshift("São José dos Campos")
console.log(cidades)
console.log(cidades.slice(1,3))
cidades.push("Guararema")
cidades.unshift("Mogi das Cruzes")
console.log(cidades)
cidades.splice(2,2)
console.log(cidades)