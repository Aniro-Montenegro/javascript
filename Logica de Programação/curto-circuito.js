let n =0;

n=n || 20;
console.log(n);


let isValid= false;

isValid && console.log("Primeiro Válido");
isValid || console.log("Segundo Válido");



let valor= false;

 console.log("false: "+(valor && valor));
  console.log("false: "+(valor || valor));
  console.log("false: "+(valor && true));
  console.log("false: "+(valor || false));
   console.log("false: "+(true && valor));
  console.log("false: "+(false || valor));
  
valor =true
 console.log("true: "+(valor && valor));
 console.log("true: "+(valor || valor));
  console.log("true: "+(valor && true));
 console.log("true: "+(valor || false));
 console.log("true: "+(true && valor));
 console.log("true: "+(false || valor));