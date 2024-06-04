let nome, idade, telefone, opcao



function calcSalario() {
    let salarioBruto = Number.parseFloat(document.getElementById("salarioBruto").value)
    let porcentagemDesc = Number.parseInt(document.getElementById("porcentagemDesc").value)

    let salarioLiquido = salarioBruto - (salarioBruto * (porcentagemDesc / 100))

    document.getElementById("resultado").innerHTML = "R$" + salarioLiquido.toFixed(2)

    if(isNaN (salarioBruto) || salarioBruto < 0 || porcentagemDesc < 0){
        document.getElementById("resultado").innerHTML = "Os Valores são Inválidos!"


    }
}

function clickButton() {
    opcao = Number.parseInt(prompt("SEJA BEM-VINDO\n 1- cadastrar Usuário\n 2- Calcular Salário\nEscolha Uma Opção"))

    switch (opcao) {

        case 1:
            nome = prompt("Digite seu nome:")
            idade = prompt("Digite sua idade:")
            telefone = prompt("Digite seu telefone:")

            alert("DADOS DO USUÁRIO\nNOME: " + nome + "\nIDADE: " + idade + "\nTELEFONE: " + telefone + "\n")
            break;
        case 2:
            let vlrHoraTrabalhada = Number.parseFloat(prompt("Digite o valor da hora/trabalhadaa:"))
            let qtdHorasTrabalhada = Number.parseInt(prompt("Horas totais trabalhadas: "))
            let inss = Number.parseInt(prompt("Percentual INSS (%):"))



            let salarioBruto = vlrHoraTrabalhada * qtdHorasTrabalhada
            let salarioLiquido = salarioBruto - (salarioBruto * (inss / 100))

            alert(`SALÁRIO BRUTO: ${salarioBruto}\nSALÁRIO LIQUIDO: ${salarioLiquido}`)
            break;

        default:

            alert("OPÇÃO INVÁLIDA")
    }

   

    }


 function exibirNumeros(){
    let string = ""
    let numeroDigite = ""

        for (let i = 0; i < numeroDigite; i++){
            string += `${i}<br>`
            document.getElementById("resultNumbers").innerHTML = string
            document.getElementById("numeroDigite").innerHTML = numeroDigite

        }

        if (resultNumbers <= numeroDigite){
            document.getElementById("numeroDigite").innerHTML = numeroDigite


        


    }

}

/* ARRAYS */

// Declaraçao de array //

let array = ['Janeiro', 'Fevereiro', 'Março']

console.log(array[0]) //Janeiro
console.log(array[1]) //Fevereiro
console.log(array[2]) //Março

// EXIBIR O ARRAY COM FOR CONVENCIONAL //
for(let i = 0; i < array.length; i++){
    console.log(array[i])

}


// Exibir o array com FOR OF //
for(let item of array){
    console.log(item)

}
