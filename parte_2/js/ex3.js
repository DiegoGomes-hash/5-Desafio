/* 

const members = [
    { name: "Wilker", data: "20/04/2017", email: "victor.wilker@acensjr.com" },
    { name: "Angeliano", data: "15/05/2019", email: "raimundo.angeliano@gmail.com" },
    { name: "Ives", data: "11/08/2019", email: "ives.moreira@outlook.com" },
    { name: "Santos", data: "23/03/2020", email: "lucas.santos@hotmail.com" }
    ];
*/

const { members }  = require("./data");

    members.forEach(member => {
        
        member.Anos_de_empresa = 2020 - member.data.slice(6,10);
    });

    console.log(members);
    
    


    