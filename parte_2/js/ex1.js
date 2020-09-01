
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

    ];  */



    const { projects }  = require("./data");
         // Solução por Arrow Functions
       
        const Ano2019 = projects.filter(({year } ) => year === 2019).reduce((accumalator, {price}) => accumalator + price, 0);        
        const Ano2020 = projects.filter(({year } ) => year === 2020).reduce((accumalator, {price}) => accumalator + price, 0);
        
        console.log(`2019 => ${Ano2019}`);
        console.log(`2020 => ${Ano2020}`);

        console.log('--------------');
        
       // Solução por High Order Functions
        var Array_1 = [];
        var Array_2 = [];
        
        let filtrar = projects.filter(function (num){
            return (num.year === 2019);

        });

        for(i=0;i<filtrar.length;i++){
            Array_1.push(filtrar[i]);
        }
        /* console.log(Array_1);*/
        

        let reduzir = Array_1.reduce(function(filtrar1, filtrar2) {
            return filtrar1 + filtrar2.price;
        }, 0);

        console.log(`2019 => ${reduzir}`);
        /* console.log(reduzir);*/
        

        let filtrar_2 = projects.filter(function(num) {
            return (num.year === 2020);

        });

        for(i=0;i<filtrar_2.length;i++){
            Array_2.push(filtrar_2[i]);
        }
        /* console.log(Array_1);*/
        

        let reduzir_2 = Array_2.reduce(function(filtrar3, filtrar4) {
            return filtrar3 + filtrar4.price;
        }, 0);

        console.log(`2020 => ${reduzir_2}`);
        
        