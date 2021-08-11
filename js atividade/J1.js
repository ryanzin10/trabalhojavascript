function maiorMenor(a,b,c,d,e){
    a = prompt("Digite um valor inteiro: ")
    b = prompt("Digite um valor inteiro: ")
    c = prompt("Digite um valor inteiro: ")
    d = prompt("Digite um valor inteiro: ")
    e = prompt("Digite um valor inteiro: ")

    lista = [a, b, c, d, e]
    let maior, menor
    maior = Math.max(...lista)
    menor = Math.min(...lista)

    alert("Maior número: "+ maior + "\nMenor número: " + menor)
}

function vogal(c){
    c = prompt("Digite um caracter:")
    vogais = ['a','A','e','E','i','I','o','O','u','U']
    
    if (vogais.includes(c) == true){
        alert("1")
    }else{alert("0")}
}

function limites(li, ls){
    li = prompt("Digite o limite inferior: ")
    ls = prompt("Digite o limite superior: ")
    let soma = 0
    pares = []

    if (li%2 == 0){
        for (li; li<=ls; li+2){
            pares.push(li)
            soma += li
        }
        alert("Pares no intervalo:\n" + pares + "\n\nSoma: " + soma)
    }
    else if (li%2 != 0){
        for (i = li+1; i<=ls; i+2){
            pares.push(i)
            soma += i
        }
        alert("Pares no intervalo:\n" + pares + "\n\nSoma: " + soma)
    }
    
}

function ordem(a,b,c){
    a = prompt("Digite um valor inteiro: ")
    b = prompt("Digite um valor inteiro: ")
    c = prompt("Digite um valor inteiro: ")

    lista = [a, b, c]
    alert(lista.sort())
}

function positivo_Negativo(x){
    x = prompt("Digite um valor inteiro:")

    if (x<0){
        alert("Positivo: false")
    }else{alert("positivo: true")}
}

function par_Impar(x){
    x = prompt("Digite um valor inteiro:")

    if(x%2==0){
        alert("Par")
    }
    else{
        alert("Impar")
    }
}