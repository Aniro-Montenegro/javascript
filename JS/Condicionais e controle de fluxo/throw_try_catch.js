function sayMyName(name = "") {
  if (name === "") {
    throw new Error("Nome é obrigatório");
  }
  console.log("Depois do erro");
}

try {
  sayMyName("");
} catch (error) {
  console.log(error);
}
