/*
String consiste em uma cadeia de caracteres
Para denotar string no JavaScript são usados aspas duplas ( " " ),
 aspas simples ( ' ' ) e template literals ou template strings ( ), 
 template literals permitem textos multilinhas e expressões de linguagem 
 com os caracteres ${ }, por exemplo: console.log(A soma de duas unidades
 é ${1+1}), já as outras não, por exemplo: console.log("Isso é um texto").
*/

console.log('Aniro')
console.log("Aniro")
console.log("aspas simples '' ")
console.log('aspas duplas "" ')
console.log(`Aspas simples ''\nAspas duplas ""`)
console.log(`Expressão ${10+20}`)
console.log(`Donec et metus non mi consectetur consequat. 
Etiam eu tellus mattis, interdum urna a, interdum tellus. 
Nam ut porta magna, quis hendrerit ipsum. Nullam malesuada 
imperdiet bibendum. Ut et ullamcorper massa. Vestibulum ante 
ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
curae; Ut congue, diam vel eleifend ultricies, lectus nisi gravida 
metus, dignissim eleifend ante libero et est. Nunc eros velit, 
consectetur ut lacinia a, tempus nec erat. Nunc imperdiet laoreet 
nisl id porttitor. Phasellus blandit, urna commodo tristique euismod, 
mauris nunc sodales ipsum, nec accumsan arcu diam sed justo.
 In efficitur, leo non euismod ullamcorper, magna felis faucibus mauris,
  at efficitur sapien nunc nec mi`)

  /////////////////////////////////////////////////////////////////
  /*
  No JavaScript temos 4 tipos de números, os inteiros 
  (por exemplo: 13), os reais ou float (por exemplo: 83.1),
   o Not a Number (NaN) e o infinito (Infinity).*/

   console.log(10+10)
   console.log(10+10.58)
   console.log(4==NaN)
   console.log(10>Infinity)
   console.log(25<Infinity)

   ///////////////////////////////////////////////////
   /*
   No JavaScript, um dado boolean pode ter apenas 2 
   valores, verdadeiro (true) e falso (false).*/

   console.log(true==false)

   ////////////////////////////////////////////////
/*
No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o
 tipo de dados null, que são muitas vezes confundidos. 
 A diferença dos dois é que null é considerado como um objeto
  vazio, ou seja, algo indefinido não existe, já algo null 
  existe mas não tem valor algum.*/
///////////////////////////////////////////////
/*
O tipo de dado Object é estrutural, contendo atributos, ou propriedades, e 
métodos, ou funcionalidades. Um objeto é denotado com os caracteres { }, 
atributos e métodos com nome: valor . Por exemplo { nome: "João", idade: 20 }.*/
var objeto={
    "atributo1":10,
    "atributo2":"String",
    "atributo3":true,
    "atributo4":null
}
console.log(objeto)

/////////////////////////////////////////////////////////
/*O tipo de dados Array, ou vetor, também é estrutural, e consiste em uma 
lista de dados agrupados, um Array é denotado com os caracteres [ ] ,
 por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .*/
 var lista=["Nome",10,null,{"obj":"palavra"}]
 console.log(lista)
 console.log(lista[1])
 console.log(lista[3])



