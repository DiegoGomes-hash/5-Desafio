

/*var array_n = [ ];

var ul = document.createElement('ul');
var input = document.getElementById ('inserir_texto');
var input = document.getElementById('inserir_anotacao');
var input = document.getElementsByClassName('button_sec5');
*/

function GetDados(){
    var input = document.getElementById ('inserir_texto').value; /* Seta a div pra alocar os elementos*/
    var input2 = document.getElementById('inserir_anotacao').value;

    

    if(input == '' && input2 == '' ) return ; 

    var informacoes = document.getElementById('informacoes'); /* Inicia uma div pra alocar os elementos*/
    var div = document.createElement('div');                 /* Cria uma div pra alocar os elementos*/
    
    var p = document.createElement('p');    /* Inicia uma tag-p onde vai conter os elementos*/
    
    
    p.style.marginTop = '5px'
    p.textContent = input; /* Atribui esses elementos ao tag-p*/
          
    informacoes.appendChild(div); /* Realiza o link entre a lista vazia e a div*/
    /* Realiza o link entre a did e a tag p - que contém o elemento*/
    
    var div2 = document.createElement('div');
    div2.id = 'd';
   
    var h1 = document.createElement('div');
    
    
    h1.style.height = '100px';
    h1.style.width = '400px';
    h1.style.overflow = 'auto';
    h1.style.scrollbar = 'gold';
    div2.style.marginTop = '0px'


    h1.textContent = input2;
    informacoes.appendChild(div2);

    div2.appendChild(p); 
    div2.appendChild(h1);
    
    div.appendChild(div2);

    document.getElementById("inserir_texto").value = " "; // Limpa a caixa do form
    document.getElementById("inserir_anotacao").value = " ";
    


    var div3 = document.createElement('div');  
    div3.id = 'b';
    var button = document.createElement('button')


    button.textContent = 'Deletar';
    button.onclick = Del;

    informacoes.appendChild(div3);
    div3.appendChild(button);
    div.appendChild(div3);

    
}


function Del (event){
    event.target.parentElement.parentElement.remove();
}