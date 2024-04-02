// Referência aos elementos do HTML
var scan = document.querySelector("#scan");
var btn = document.querySelectorAll(".btn");

// Esse for irá percorrer todos os botões
for(item of btn) {
    // Evento de clique para cada um dos botões
    item.addEventListener('click', (e) => {
        // Quando o botão é clicado, o texto dentro desse 
        // botão é obtido e adiciona no campo de entrada.
        btnText = e.target.innerText;

        // Se o valor for '×', substitui por '*'
        if(btnText == '×'){
            btnText = '*';
        }
        // Se o valor for '÷', substitui por '/'
        if(btnText == '÷'){
            btnText = '/';
        }
        // Essas 2 mudanças acontecem por causa que os 
        // sinais aritméticos '×' e '÷' não são operadores
        // aritméticos padrão da linguagem

        // Passa esses novos valores para tela
        scan.value += btnText;
    });
}

// Calcula o seno do valor na tela
function sin(){
    scan.value = Math.sin(scan.value);
}

// Calcula o cosseno do valor na tela
function cos(){
    scan.value = Math.cos(scan.value);
}

// Calcula a tangente do valor na tela
function tan(){
    scan.value = Math.tan(scan.value);
}

// Calcula a potência quadrada do valor na tela
function pow(){
    scan.value = Math.pow(scan.value, 2);
}

// Calcula a raiz quadrada do valor na tela
function sqrt(){
    scan.value = Math.sqrt(scan.value, 2);
}

// Calcula o logaritmo natural do valor na tela
function log(){
    scan.value = Math.log(scan.value);
}

// Define o valor de Pi (π) na tela
function pi(){
    scan.value = 3.14159265359;
}

// Define o valor de e (número de Euler) na tela
function e(){
    scan.value = 2.71828182846;
}

// Calcula o fatorial do valor na tela
function fact(){
    var i, num, f;
    f = 1;
    num = scan.value;
    for(i = 1; i <= num; i++){
        f = f * i;
    }

    i = i - 1;

    scan.value = f;
}

// Remove o último caractere do valor na tela
function backspc(){
    scan.value = scan.value.substr(0, scan.value.length - 1);
}
