//Esta linea es para poder ejecutar prompt en terminal y poder dar datos de entrada.
const prompt = require("prompt-sync")({ sigint: true });

//Aqui hemos hecho un sistema de verificación numerico para que en algunos apartados solo acepte valores numericos y asi no nos de error.
function esNumerico(valor){
    return !Number.isNaN(Number(valor));
}


//Aqui creamos una funcion que lo que hace es imprimir espacios en terminal para que no se vea las jugadas de los jugadores.
function spaces(nmb){
    let i = 0;
    while(i < nmb){
        console.log(" ");
        i++;
    }
}



//Intruduccion de los nombres de los jugadores.
console.log("*****************************");
console.log("   PIEDRA / PAPEL / TIJERA");
console.log("*****************************");
let partidas1 = 0;
spaces(1);
let nombre1 = prompt("Dime tu nombre jugador 1: ");
while(nombre1 == ""){
    nombre1 = prompt("Dato invalido, dime tu nombre jugador 1: ");
}

let partidas2 = 0;
spaces(1);
let nombre2 = prompt("Dime tu nombre jugador 2: ");
while(nombre2 == ""){
    nombre2 = prompt("Dato invalido, dime tu nombre jugador 2: ");
}

// Aqui lo que hacemos es determinar cuantas monedas tiene cada jugador 
//Ademas aplicaos el sistema de verificacion para que solo puedan dar datos numericos de entrada.
spaces(3);
let mony1 = Number(prompt(`Dime tus monedas ${nombre1}: `));
let verifi = esNumerico(mony1);
while(verifi != true  || mony1 == 0){
    if(mony1 == 0){
        mony1 = Number(prompt(`Tienes que tener almenos 1 monedas para poder jugar, dime tus monedas ${nombre1}: `));
        verifi = esNumerico(mony1);
    }
    else{
        mony1 = Number(prompt(`Dato invalido, dime tus monedas ${nombre1}: `));
        verifi = esNumerico(mony1);
    }
}

spaces(1);
let mony2 = Number(prompt(`Dime tus monedas ${nombre2}: `));
verifi = esNumerico(mony2);
while(verifi != true  || mony2 == 0){
    if(mony2 == 0){
        mony2 = Number(prompt(`Tienes que tener almenos 1 monedas para poder jugar, dime tus monedas ${nombre2}: `));
        verifi = esNumerico(mony2);
    }
    else{
        mony2 = Number(prompt(`Dato invalido, dime tus monedas ${nombre2}: `));
        verifi = esNumerico(mony2);
    }
}
spaces(4);

//Iniciamos aqui un bucle en while para que los jugadores puedan seguir jugando si quieren y les quedan monedas.
let bucle = true;
let c_repe = 0;
while(bucle == true){

    //Aqui damos las opciones de juego y las reglas de datos de entrada para las jugadas.
    if(c_repe != 0){
        spaces(16);
        console.log("*****************************");
        console.log("   PIEDRA / PAPEL / TIJERA");
        console.log("*****************************");
    }
    spaces(1);
    console.log("---------------------------");
    console.log("Hay tres opciones de juego:");
    console.log("---------------------------");
    spaces(1);
    console.log("1) Piedra");
    console.log("2) Papel");
    console.log("3) Tijera");
    spaces(1);
    console.log("Selecciona una jugada con un valor de 1, 2 o 3.");

    // Aqui determinamos las jugadas de cada jugador y aplicamos nuevamente el sistema de verificación numerico.
    spaces(4);
    let apuesta1 = Number(prompt(`Seleccione su apuesta ${nombre1}: `));
    verifi = esNumerico(apuesta1);
    while(apuesta1 > mony1 || apuesta1 == 0 || verifi != true){
        if(apuesta1 > mony1){
            apuesta1 = Number(prompt(`La apuesta no puede ser mayor a tus monedas, seleccione su apuesta ${nombre1}: `));
            verifi = esNumerico(apuesta1);
        }
        else if(apuesta1 == 0){
            apuesta1 = Number(prompt(`Tienes que apostar algo para jugar, seleccione su apuesta ${nombre1}: `));
            verifi = esNumerico(apuesta1);
        }
        else if(verifi != true){
            apuesta1 = Number(prompt(`Dato invalido, seleccione su apuesta ${nombre1}: `));
            verifi = esNumerico(apuesta1);
        }
    }
    spaces(1);
    let apuesta2 = Number(prompt(`Seleccione su apuesta ${nombre2}: `));
    verifi = esNumerico(apuesta2);
    while(apuesta2 > mony2 || apuesta2 == 0 || verifi != true){
        if(apuesta2 > mony2){
            apuesta2 = Number(prompt(`La apuesta no puede ser mayor a tus monedas, seleccione su apuesta ${nombre2}: `));
            verifi = esNumerico(apuesta2);
        }
        else if(apuesta2 == 0){
            apuesta2 = Number(prompt(`Tienes que apostar algo para jugar, seleccione su apuesta ${nombre2}: `));
            verifi = esNumerico(apuesta2);
        }
        else if(verifi != true){
            apuesta2 = Number(prompt(`Dato invalido, seleccione su apuesta ${nombre2}: `));
            verifi = esNumerico(apuesta2);
        }
    }


    //Aqui determinamos la apuesta que quiere hacer cada jugador, la condicion esta en que la apuesta no supere el numero de monedas que posee
    //Ademas aplicamos el sistema de verificación para que no tengamos errores a la hora de ejecutar.
    spaces(3);
    let jugada1 = prompt(`Seleccione su jugada ${nombre1}: `);
    verifi = esNumerico(jugada1);
    while(jugada1 <1 || jugada1 > 3 || verifi != true){
        jugada1 = prompt(`Dato invalido, Seleccione su jugada ${nombre1}: `);
        verifi = esNumerico(jugada1);
    }

    //Funcion de espacios de valor 20.
    // spaces(20);
    spaces(17);

    let jugada2 = prompt(`Seleccione su jugada ${nombre2}: `);
    verifi = esNumerico(jugada2);
    while(jugada2 <1 || jugada2 > 3 || verifi != true){
        jugada2 = prompt(`Dato invalido, Seleccione su jugada ${nombre2}: `);
        verifi = esNumerico(jugada2);
    }
    


    //Aqui determinamos por condiciones para saber quien es el ganador viendo cada posible opcion de juego.
    spaces(10);
    if(jugada1 == jugada2){
        spaces(1);
        console.log("Empate, ninguno de los jugadores gana ni pierde")
    }
    else if(jugada1 == 1 && jugada2 == 2){
        spaces(1);
        console.log(`El ganador es el ${nombre2}`);
        mony2 += apuesta1;
        mony1 -= apuesta1;
        partidas2++;
    }
    else if(jugada1 == 2 && jugada2 == 3){
        spaces(1);
        console.log(`El ganador es el ${nombre2}`);
        mony2 += apuesta1;
        mony1 -= apuesta1;
        partidas2++; 
    }
    else if(jugada1 == 1 && jugada2 == 3){
        spaces(1);
        console.log(`El ganador es el ${nombre1}`);
        mony1 += apuesta2;
        mony2 -= apuesta2;
        partidas1++;
    }
    else if(jugada1 == 2 && jugada2 == 1){
        spaces(1);
        console.log(`El ganador es el ${nombre1}`);
        mony1 += apuesta2;
        mony2 -= apuesta2; 
        partidas1++;
    }
    else if(jugada1 == 3 && jugada2 == 2){
        spaces(1);
        console.log(`El ganador es el ${nombre1}`);
        mony1 += apuesta2;
        mony2 -= apuesta2;
        partidas1++;
    }
    else if(jugada1 == 3 && jugada2 == 1){
        spaces(1);
        console.log(`El ganador es el ${nombre2}`);
        mony2 += apuesta1;
        mony1 -= apuesta1;
        partidas2++;
    }

    //Mini menu de datos de los jugadores en el juego.
    spaces(1);
    console.log("Partida Finlizada:")
    console.log(`${nombre1}: Tiene ${mony1} monedas.`)
    console.log(`${nombre1}: A ganado ${partidas1} partidas.`)
    spaces(1);
    console.log(`${nombre2}: Tiene ${mony2} monedas.`)
    console.log(`${nombre2}: A ganado ${partidas2} partidas.`)
    spaces(3);


    //Aqui hacemos una condicion para que si alguno de los dos jugadores se queda sin monedas se acabe el juego inmediatamente.
    if(mony1 == 0){
        console.log(`Lo siento ${nombre1}, te has quedado sin monedas, FIN DEL JUEGO`);
        spaces(1);
        break;
    }
    else if(mony2 == 0){
        console.log(`Lo siento ${nombre2}, te has quedado sin monedas, FIN DEL JUEGO`);
        spaces(1);
        break;
    }


    //Y po ultimo lo que hacemos aqui es preguntarle a los jugadores si quieren volver a jugar.
    let repit = prompt("Quereis volver a jugar? S or N: ")
    while(repit != "S" && repit != "N"){
        repit = prompt("Dato invalido, responde con S o N para continuar:");
    }
    if( repit == "S"){
        spaces(1);
        console.log("Perfecto, pasadlo bien.");
        c_repe++;
    }
    else if(repit == "N"){
        console.log("Que pena, hasta la proxima.");
        break;
    }
}

 // Menú final de daots de los jugadores a lo largo del Juego.
spaces(10);
console.log("*****************");
console.log("Juego Finalizado:")
console.log("*****************");
spaces(1);
console.log(`${nombre1}: Tiene ${mony1} monedas.`)
console.log(`A ganado ${partidas1} partidas.`)
spaces(2);
console.log(`${nombre2}: Tiene ${mony2} monedas.`)
console.log(`A ganado ${partidas2} partidas.`)
spaces(5);
