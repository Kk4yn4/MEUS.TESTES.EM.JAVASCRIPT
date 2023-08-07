let paises = ["Brasil" ,"França","EUA"]
paises.push("Africa")
paises.sort()
console.log (`  Nossos países são: ${paises} e o prmeiro pais é o ${paises[0]} na nossa lista contem ${paises.length} paises`)

let valores = [0,5,8,9,4]
console.log(valores)

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let por = valores.indexOf(4)
console.log(` o valor 4 esta na posiçao ${por}`)