/*  

const members = [
    { name: "Wilker", data: "20/04/2017", email: "victor.wilker@acensjr.com" },
    { name: "Angeliano", data: "15/05/2019", email: "raimundo.angeliano@gmail.com" },
    { name: "Ives", data: "11/08/2019", email: "ives.moreira@outlook.com" },
    { name: "Santos", data: "23/03/2020", email: "lucas.santos@hotmail.com" }
    ];
*/


    const { members }  = require("./data");

    var Array_Ex4 = [];
    var Array_Ex4_1 = [];
    var Array_final =[];

    const Emails = members.map(({email}) =>email)
     /*console.log(Emails);*/

    for(i=0;i<Emails.length;i++){
        Array_Ex4.push(Emails[i]);
    }

    /* console.log(Emails); */

   /*  console.log(Array_Ex4);*/

    const Dominio = Array_Ex4.map(Emails=> {
        const  Array_Ex4 = Emails.split('@');
        return  Array_Ex4[1];

    });

    /*console.log( Dominio); */

    for(i=0;i<Dominio.length;i++){
        Array_Ex4_1.push(Dominio[i]);

    }

     console.log(Array_Ex4_1);

    const membro = Array_Ex4_1.find(p =>p.startsWith('a'))
    console.log(membro);

    