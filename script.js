
// for --> para (quando você sabe quantas vezes vai acontecer)
// while --> enquanto (usado quando não se sabe quantas vezes a repetição acontece)
// break, continue --> o primeiro força a parada do loop, o segudo apenas força para o próximo

for (let contador = 0; contador < 100; contador ++) {
    console.log("Mariana" + contador)
    if (contador == 50) break;
}

let contagem = 0

while (contagem < 10) {
    console.log("Mariana")

    contagem++
}

for (let contacao = 5; contacao > 0; contacao--) {
    console.log(contacao)
}

const numero = 6
for (let contaracao = 0; contaracao <= 10; contaracao++) {
    console.log(`6 x ${contaracao} = ${numero * contaracao}`)
}

for (let conta = 1; conta <= 30; conta++) {
    if (conta % 3 !== 0) continue
    console.log(conta)
}

for (let numeru = 1; numeru <= 10; numeru++) {
    for (numeru1 = 1; numeru1 <= 10; numeru1++)
}
