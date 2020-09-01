var button = document.querySelector('.button')  // Retorna o primeiro elemento dentro do documento
var entrada_da_cidade = document.querySelector('.entrada_da_cidade')

var nome_da_cidade = document.querySelector('.nome_da_cidade')
var temperatura_minima = document.querySelector('.temperatura_minima')
var temperatura_máxima = document.querySelector('.temperatura_máxima')
var umidade = document.querySelector('.umidade')
var pais = document.querySelector('.pais')


// Solução usando (then/catch)


button.addEventListener("click", function(){ // Adiciona um evento ao botão // tipografia alvo.addEventListener(type,listener[, options]);

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+entrada_da_cidade.value+'&appid=648712774136d25cce110be424b42b3e')

  .then(response => response.json())
  .then(data => {

    var Id_nome_da_cidade = data ['name'];
    var Id_temperatura_minima = data ['main'] ['temp_min']
    var Id_temperatura_máxima = data ['main'] ['temp_max']
    var Id_umidade = data ['main'] ['humidity']
    var Id_pais = data ['sys'] ['country']

    nome_da_cidade.innerHTML = `Cidade:  ${Id_nome_da_cidade}`

    var Id_fixo_1 = Id_temperatura_minima  - 273.15;
    temperatura_minima.innerHTML = `Temp_min:  ${Id_fixo_1.toFixed(2)} (°C)`
   
    var Id_fixo = Id_temperatura_máxima  - 273.15;            
    temperatura_máxima.innerHTML =  `Temp_max: ${Id_fixo.toFixed(2)} (°C)`
    
    umidade.innerHTML = `Umidade:  ${Id_umidade} (%)`  
    pais.innerHTML = `País: ${Id_pais}`


  })    
  .catch(err => alert("A cidade informada não existe"))    
})




// Solução usando (async/await)

/* 
button.addEventListener("click", async function previsao(){ // me retorna a promisse

    
    // espera a promisse ser resolvida
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+entrada_da_cidade.value+'&appid=648712774136d25cce110be424b42b3e')
    const data = await response.json(); // assincrona 
       
      var Id_nome_da_cidade = data ['name'];
      var Id_temperatura_minima = data ['main'] ['temp_min']
      var Id_temperatura_máxima = data ['main'] ['temp_max']
      var Id_umidade = data ['main'] ['humidity']
      var Id_pais = data ['sys'] ['country']

      nome_da_cidade.innerHTML = `Cidade: ${Id_nome_da_cidade}`

      var Id_fixo_1 = Id_temperatura_minima  - 273.15;
      temperatura_minima.innerHTML = `Temp_min:  ${Id_fixo_1.toFixed(2)} °C`
     
      var Id_fixo = Id_temperatura_máxima  - 273.15;            
      temperatura_máxima.innerHTML =  `Temp_max: ${Id_fixo.toFixed(2)} °C`

      umidade.innerHTML = `Umidade:  ${Id_umidade} %`  
      pais.innerHTML = `País: ${Id_pais}`
  
})


*/

/*  
    <-- Teste no console -->
  async function previsao(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=648712774136d25cce110be424b42b3e')
    const data = await response.json();
    return data;

  }
  previsao().then( console.log);
  

  <-- teste API -->

  https://api.openweathermap.org/data/2.5/weather?q='+entrada_da_cidade.value+',&appid=648712774136d25cce110be424b42b3e
  "+entrada_da_cidade.value+"
  'api.openweathermap.org/data/2.5/weather?id='+entrada_da_cidade.value+'&appid=648712774136d25cce110be424b42b3e'
  https://api.openweathermap.org/data/2.5/weather?q=london&appid=648712774136d25cce110be424b42b3e

*/