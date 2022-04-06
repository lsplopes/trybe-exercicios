const salario = 3000;

if (salario <= 1556.94) {
    salarioBase = salario * 0.92;
}
else if (salario > 1556.94 && salario <= 2594.92) {
    salarioBase = salario * 0.91;
}
else if (salario > 2594.92 && salario <= 5189.82) {
    salarioBase = salario * 0.89;
}
else if (salario > 5189.82) {
    salarioBase = salario - 570.88;
}

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
}
else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    salarioLiquido = 142.8 + salarioBase * 0.925;
}
else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    salarioLiquido = 354.8 + salarioBase * 0.85;
}
else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    salarioLiquido = 636.13 + salarioBase * 0.775;
}
else if (salarioBase > 4664.68) {
    salarioLiquido = 869.36 + salarioBase * 0.725;
}

console.log(salarioLiquido);