function checkInputs(inputs) {

    var filled = true;
    
    inputs.forEach(function(input) {
        
      if(input.value === "") {
          filled = false;
      }
    
    });
    
    return filled;
    
  }
  
  var inputs = document.querySelectorAll("input");
  var button = document.querySelector("button");
  
  inputs.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
  
      if(checkInputs(inputs)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
  
    });
  
  });

function calcular() {
    let comprimentoTotal = document.getElementById('comprimentoTotal')
    let entreEixos = document.getElementById('entreE')
    let balancoTraseiro = document.getElementById('balancoT')
    let comprimentoCarroceria = document.getElementById('comprimentoCarroceria')
    let largura = document.getElementById('largura')

    var botao = document.getElementById('botao')

    let res = document.getElementById('res')
    let informaçoes = document.getElementById('informacoes')
    let limite = 3500
    
    // calculos

    let calculoBalacoTraseiro = entreEixos.value * 0.6
    let balancoDiateiro = (comprimentoTotal.value - entreEixos.value) - balancoTraseiro.value
    let faixasLateral = Math.round((comprimentoCarroceria.value * 0.33) / 300)
    let faixasTraseira =  Math.round((largura.value * 0.8) / 300)
    
informacoes.innerHTML = ''

    if (calculoBalacoTraseiro > limite) { // verificando se o calculo ultrapassa o limite da norma
        calculoBalacoTraseiro = limite
    }
    if (balancoTraseiro.value > calculoBalacoTraseiro) { // verificando se o balanço ultrapassa o calculo
        // reprovou
        res.innerHTML = '<p class="vermelho">REPROVADO!</p>'
        // informacoes.innerHTML = ''
        informacoes.innerHTML += `<p>O limite para esse balanço traseiro é de <span class="negrito">${calculoBalacoTraseiro}mm.</span></p>` 
        informacoes.innerHTML += `<p>Você terá que diminuir o seu balanço traseiro em <span class="negrito">${balancoTraseiro.value - calculoBalacoTraseiro}mm.</span></p>`
    } else {
        // Aprovou 
        res.innerHTML = '<p class="verde">APROVADO!</p>'
        // informacoes.innerHTML = ''
        informacoes.innerHTML += `<p>O limite máximo para esse balanço traseiro é de <span class="negrito">${calculoBalacoTraseiro}mm.</span></p>`
        if (balancoTraseiro.value < calculoBalacoTraseiro){
            informacoes.innerHTML += `<p>Você ainda poderia aumentar o seu balanço traseiro em <span class="negrito">${calculoBalacoTraseiro - balancoTraseiro.value}mm.</span></p>` 
        }
    }
    informacoes.innerHTML += `<p>O balanço dianteiro é de <span class="negrito">${balancoDiateiro}mm.</span></p>` 
    informacoes.innerHTML += `<p>O número de faixas nas laterais é de <span class="negrito">${faixasLateral} faixas.</span></p>` 
    informacoes.innerHTML += `<p>O número de faixas na traseira é de <span class="negrito">${faixasTraseira} faixas.</span></p>` 
}

