const a = 0;
const b = 100;
const c = 80; 

if (a <= 0 || b <= 0 || c <= 0) {
    console.log("ERRO - não existe angulo negativo ou nulo em um triangulo")
}
else if (a + b + c === 180) {
    console.log("true")
}
else {
    console.log("false")
}