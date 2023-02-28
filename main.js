const promNotas =(nota1,nota2) => (nota1+nota2)/2;

alert("Introducir alumnos y sus respectivas notas, se dirá cuantos alumnos aprobaron, cuantos desaprobaron, el mejor promedio y el menor promedio.");

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
while(nombre!="0"){
    nota1 = parseFloat(prompt("Introduzca la primer nota: "));
    nota2 = parseFloat(prompt("Introduzca la segunda nota: "));
    promedio = promNotas(nota1,nota2);
    console.log("El alumno " + nombre + " tiene un promedio de " + promedio);
    
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