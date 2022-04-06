const a = 1;
const b = 3;
const c = 3;

if (a > b && a > c) {
    console.log(a)
}
else if (b > a && b > c) {
    console.log(b)
}
else if (c > b && c > a) {
    console.log(c)
}
else {
    console.log("Existem 1 ou mais numeros iguais")
}