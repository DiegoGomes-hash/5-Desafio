/* 
const projects = [
    { name: "Fisiovita", stack: "Ruby on Rails", devs: "Angeliano e Vinicius", price: 2500, year: 2019 },
    { name: "Medcenter", stack: "Wordpress", devs: "Samuel", price: 3000, year: 2019 },
    { name: "LucasFrotaDesign", stack: "Wordpress", devs: "Davi", price: 1600, year: 2019 },
    { name: "Az-Cursos", stack: "Ruby on Rails", devs: "Angeliano e Wilker", price: 2000, year: 2019 },
    { name: "LEMA", stack: "React", devs: "Ives e Ivisson", price: 6000, year: 2020 },
    { name: "JAO", stack: "Node", devs: "Santos e Vinicius", price: 2500, year: 2020 },
    { name: "Inova", stack: "Wordpress", devs: "Vicente", price: 3000, year: 2020 },
    { name: "SIMAE", stack: "React", devs: "João Pedro e Angeliano", price: 3000, year: 2020 },

    ];

    */

   const { projects }  = require("./data");


   
    // Solução por High Order Functions
    const Beta = projects.sort( function(pa,pb) {
        if(pa.name.toLocaleLowerCase() < pb.name.toLocaleLowerCase()) return -1;
        if(pa.name.toLocaleLowerCase() > pb.name.toLocaleLowerCase()) return 1;
        return 0;
    });
    console.log(Beta);

    console.log('--------------------------------------');


     // Solução por Arrow Functions
    const Compara = (a , b) => {
        if(a.name > b.name ){
            return 1;
        } else if (b.name > a.name){
            return -1;
        } else {
            return 0;
        }
    } 

        const result = projects.sort(Compara);
        console.log(result);


    
  


        /*  
        const { projects }  = require("./data");
    
        var novoArray = [];
        const Nomes = projects.map(({name}) =>name)
        Nomes.sort();
        console.log(Nomes)

        for(i=0;i<Nomes.length;i++){
        novoArray.push(Nomes[i]);
        }
        console.log(novoArray)

        */