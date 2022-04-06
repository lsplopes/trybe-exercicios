const custo = 5;
const preco = 150;

const custoComImposto = custo * 1.2;
const lucroVendaMil = (preco - custoComImposto) * 1000; 

if (custo < 0 || preco < 0) {
    console.log("erro - o custo ou o preço não podem ser menor que zero");
}
else if (custoComImposto > preco) {
    console.log("sua empresa terá um prejuizo de", lucroVendaMil);
}
else if (custoComImposto <= preco) {
    console.log("sua empresa terá um lucro de", lucroVendaMil);
}