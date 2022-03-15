
var numSort = []
var numEsco = []

function sorteio() {
    var cont = 0
    numSort=[]

  while (cont < 6) {

    let num = Math.random() * 60
    num = Math.ceil(num)

    if (!numSort.includes(num)){
    
    numSort[cont] = num
    console.log(numSort)
    cont++

    }
}

    document.getElementById("sorteados").innerHTML = numSort
    contAcertos()

}

function getValor(valor, pos) {
    valor = Number(valor)
    if(valor <= 0 || valor > 60){
        alert("Número invalido! Digite um número entre 1 e 60.")
        document.getElementById(`num${pos+1}`).value = ""
    } else if (numEsco.includes(valor)) {
        alert("Este número já foi digitado! Escolha outro valor.")
        document.getElementById(`num${pos+1}`).value = ""
    } else {
    numEsco[pos] = valor
    console.log(numEsco)
    }
}

function contAcertos() {
    var cont_Acertos = 0
    numEsco.forEach(function(value, index) {
        if (numSort.includes(value)) {
            cont_Acertos++
        }
    })

    document.getElementById("acertos").innerHTML = cont_Acertos
}