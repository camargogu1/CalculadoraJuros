
function confirma(){
    var checado
    let idade = document.getElementById("idade").value
    let negativado = document.getElementById("negativado").value
    let emprego = document.getElementsByName("emp")
    emprego.forEach((item) => {
        if(item.checked){
            checado = item.value 
        }
    })
    

    let valor = document.getElementById("valor").value
    let meses = document.getElementById("parcelas").value
    let alto, medio, baixo, txjuro, valor2, parcelas
    if (idade == undefined || negativado == "" || emprego == "" || valor == undefined || meses == undefined)
    {
        alert("Preencha todos os dados!")
        document.getElementById("botao").style.backgroundColor = ""
    }

    if(idade<=18 || negativado == "sim" || checado == "desempreg")
        alto = 1
    else if (idade>18 && idade <25 || checado == "autonomo")
        medio = 1
    else
        baixo = 1
    
    if (alto == 1)
        txjuro = 0.0525
    else if (medio == 1)
        txjuro = 0.0425
    else
        txjuro = 0.0325
    console.log(emprego) 
    valor2 = (valor*(1+txjuro)**meses).toFixed(2)
    parcelas = (valor2 / meses).toFixed(2)
    document.getElementById("valor2").value = "R$ "+valor2
    document.getElementById("valor_parcelas").value = meses+"x "+parcelas
    document.getElementById("botao").style.backgroundColor = "green"
}

    


function teste (){
    document.getElementById("idade").value = 30
    document.getElementById("negativado").value = "sim"
    document.getElementById("empreg").value = "desempreg"
    document.getElementById("valor").value = 10000
    document.getElementById("parcelas").value = 5
}

