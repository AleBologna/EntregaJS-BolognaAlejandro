const promNotas =(nota1,nota2) => (nota1+nota2)/2;
alert("Introducir alumnos y sus respectivas notas, se dirá cuantos alumnos aprobaron, cuantos desaprobaron, el mejor promedio y el peor promedio. Al final podrá preguntar por alumnos subidos anteriormente.");

let nombre = prompt("Introduzca el nombre del alumno (Para finalizar presione 0):");
let nota1;
let nota2;
let promedio;
let aprobados = 0;
let desaprobados = 0;
let notaMax;
let alumnoMax;
let notaMin;
let alumnoMin;
const arrayAlumnos = [];
while(nombre!="0"){
    nota1 = parseFloat(prompt("Introduzca la primer nota: "));
    nota2 = parseFloat(prompt("Introduzca la segunda nota: "));
    promedio = promNotas(nota1,nota2);
    const datos = { 
            nombreAl: nombre,
            notaUno: nota1,
            notaDos: nota2, 
            notasPromedio: promedio,
    }
    arrayAlumnos.push (datos);
    
    if(aprobados == 0 && desaprobados == 0){
        notaMax = promedio;
        alumnoMax = nombre;
        notaMin = promedio;
        alumnoMin = nombre;
    }else if(notaMax < promedio){
        notaMax = promedio;
        alumnoMax = nombre;
    }else if(notaMin > promedio){
        notaMin = promedio;
        alumnoMin = nombre;
    }
    
    if(promedio>=7){
        aprobados++;
    }else{
        desaprobados++;
    }

    

    nombre = prompt("Introduzca el nombre del alumno (Para finalizar presione 0):");
}
console.log("El alumno con mejor promedio es " + alumnoMax + " con un total de " + notaMax);
console.log("El alumno con peor promedio es " + alumnoMin + " con un total de " + notaMin);
console.log("Aprobados: " + aprobados + "   Desaprobados: " + desaprobados);
console.log("----------------------------------------");
let pregunta;
pregunta = prompt("¿Quieres preguntar las notas de algun alumno? (Escribe -no- si no quiere saber o el nombre del alumno en caso de que si quiera. Si quiere saber la informacion de todos los alumnos escriba -todos-)");
while(pregunta != "no"){

    if(pregunta === "todos"){
        console.log("-----------TODOS LOS ALUMNOS-----------");
        arrayAlumnos.forEach((el)=>{
        console.log(`${el.nombreAl} \n1er evaluacion: ${el.notaUno}\n2da evaluacion: ${el.notaDos}\nPromedio: ${el.notasPromedio}`); 
    })}else{

const buscar = arrayAlumnos.find((el)=>el.nombreAl === pregunta);
if(buscar !=undefined){
console.log(`Usted buscaba a: ${buscar.nombreAl}\nPrimer nota: ${buscar.notaUno} \nSegunda nota: ${buscar.notaDos} \nPromedio: ${buscar.notasPromedio}`);
}else{
    console.log(`Ese alumno no se encuentra en este colegio`);
}
    }
    console.log("----------------------------------------");
    pregunta = prompt("¿Quieres preguntar las notas de algun alumno? (Escribe -no- si no quiere saber o el nombre del alumno en caso de que si quiera. Si quiere saber la informacion de todos los alumnos escriba -todos-)");
}

