const salario = 2_000.0;
const imposto = 0.12;
let bonus = 200.0;
let dependentes = 2;
let salarioLiquido = salario;

bonus *= dependentes;
salarioLiquido = salario * (1 - imposto);
salarioLiquido += bonus;

console.log(salarioLiquido);