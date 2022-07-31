function insert(num){
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num //Da pra fazer o mesmo usando concatenacao atraves de "+=", mas nao sei se esse metodo e melhor
}

function clean(){
    document.getElementById('resultado').innerHTML = ''
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) //Mede o tamanho da string e apaga o ultimo caractere dela
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}