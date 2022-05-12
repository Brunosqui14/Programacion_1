let Alumno = {
    nombre:'Emmanuel',
    apellido:'Maldonado',
    dni:46482645,
    correos:{
        outlook:'em@outlook.com',
        gmail:'em@gmail.com',
        yahoo:'em@yahoo.com.ar'
    }
}

//forma 1
/*const yahoo = Alumno.correos.yahoo
const gmail = Alumno.correos.gmail
const outlook = Alumno.correos.outlook*/

//forma 2
const{yahoo, gmail, outlook} =Alumno.correos
console.log(`
    correos:
    gmail: ${gmail}
    yahoo: ${yahoo}
    outlook: ${outlook}
`)