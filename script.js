
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