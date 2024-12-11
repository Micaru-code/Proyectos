//Llamando a la libreria descargada para poder utilizar el prompt en terminal.
const prompt = require("prompt-sync")({ sigint: true });
//Creamos una funcion para poder verificar que los datos de entrada de los usuarios solo sean numericos.
function esNumerico(valor){
    return !Number.isNaN(Number(valor));
}
//Aqui creamos un array en el que iremnos guardando las jugadas durante toda la partida.
let mapa = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];
//Esta funcion nos verifica si se ha hecho un tres en ralla y nos devuelve un valor 0 o 1, para que podamos hacer una condicion y hacer break.
function ralla(jugador){
    if ((mapa[0][0] == mapa[0][1] &&  mapa[0][0] == mapa[0][2]) && mapa[0][0] != " "){
        console.log("!!!TRES EN RALLA!!!");
        console.log(`El ganador es ${jugador}.`);
        console.log(" ");
        return (0);
    }
    else if ((mapa[1][0] == mapa[1][1] &&  mapa[1][0] == mapa[1][2]) && mapa[1][0] != " "){
        console.log("!!!TRES EN RALLA!!!");
        console.log(`El ganador es ${jugador}.`);
        console.log(" ");
        return (0);
    }
    else if ((mapa[2][0] == mapa[2][1] &&  mapa[2][0] == mapa[2][2]) && mapa[2][0] != " "){
        console.log("!!!TRES EN RALLA!!!");
        console.log(`El ganador es ${jugador}.`);
        console.log(" ");
        return (0);
    }
    else if ((mapa[0][0] == mapa[1][1] &&  mapa[0][0] == mapa[2][2]) && mapa[0][0] != " "){
        console.log("!!!TRES EN RALLA!!!");
        console.log(`El ganador es ${jugador}.`);
        console.log(" ");
        return (0);
    }
    else if ((mapa[0][2] == mapa[1][1] &&  mapa[0][2] == mapa[2][0]) && mapa[0][2] != " "){
        console.log("!!!TRES EN RALLA!!!");
        console.log(`El ganador es ${jugador}.`);
        console.log(" ");
        return (0);
    }
    else if ((mapa[0][0] == mapa[1][0] &&  mapa[0][0] == mapa[2][0]) && mapa[0][0] != " "){
        console.log("!!!TRES EN RALLA!!!");
        console.log(`El ganador es ${jugador}.`);
        console.log(" ");
        return (0);
    }
    else if ((mapa[0][1] == mapa[1][1] &&  mapa[0][1] == mapa[2][1]) && mapa[0][1] != " "){
        console.log("!!!TRES EN RALLA!!!");
        console.log(`El ganador es ${jugador}.`);
        console.log(" ");
        return (0);
    }
    else if ((mapa[0][2] == mapa[1][2] &&  mapa[0][2] == mapa[2][2]) && mapa[0][2] != " "){
        console.log("!!!TRES EN RALLA!!!");
        console.log(`El ganador es ${jugador}.`);
        console.log(" ");
        return (0);
    }
    else{
        return (1);
    }
}
//Creamos esta funcion que nos muestra por pantalla la estructura de juego, aqui vamos llamando al mapa y a todas sus posiciones para ver las jugadas.
function interficie(){
    console.clear();
    console.log(" ");
    console.log("**TRES EN RALLA**");
    console.log(" ");
    console.log(` ${mapa[0][0]} | ${mapa[0][1]} | ${mapa[0][2]} `);
    console.log("---|---|---");
    console.log(` ${mapa[1][0]} | ${mapa[1][1]} | ${mapa[1][2]} `);
    console.log("---|---|---");
    console.log(` ${mapa[2][0]} | ${mapa[2][1]} | ${mapa[2][2]} `);
    console.log(" ");
}
//Solicitamos que el usuario nos diga si quiere jugar el solo contra la maquina o en multijugador (Maximo 2).
let multi = prompt("1 o 2 jugadores?: ");
//Verificamos que el dato introducido por el usuario sea 1 o 2 para que no tengamos errores.
while (multi != 2 && multi != 1){
    console.log("Introduce un valor valido para iniciar el juego.");
    multi = prompt("1 o 2 jugadores?: ");
}
//Entramos al modo multijugador si el usuario a introducido 2.
if (multi == 2){
    let jugador1 = prompt("Introduzca su nombre jugador 1: ");
    let jugador2 = prompt("Introduzca su nombre jugador 2: ");
    interficie();
    //Creamos un contador y un bucle para que la partida solo dure un maximo de 9 jugadas (Una por cada casilla), y si se llenan y ninguno gana que sea empate.
    let jugadas = 0;
    while (jugadas != 9){
        let filajugador1 = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar ${jugador1}: `) - 1));
        //Asignamos a una variable el resultado que nos de la comprobacion de que el valor introducido sea numerico o no.
        let verifi = esNumerico(filajugador1);
        //Verificamos que el jugador no nos introduzca un valor que no se pueda leer y  verificamos que sea numerico.
        while ((filajugador1 < 0 || filajugador1 > 2) || verifi != true){
            console.log("Inroduce una posicion valida para jugar.");
            filajugador1 = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar ${jugador1}: `) - 1));
            verifi = esNumerico(filajugador1);
        }
        let columnjugador1 = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar ${jugador1}: `) - 1));
        verifi = esNumerico(columnjugador1);
        while ((columnjugador1 < 0 || columnjugador1 > 2) || verifi != true){
            console.log("Inroduce una posicion valida para jugar.");
            columnjugador1 = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar ${jugador1}: `) - 1));
            verifi = esNumerico(columnjugador1);
        }
        //Aqui verificamos que la posicion seleccionada por el usuario no esta ya llena, en caso de que si podamos seleccionar otra diferente.
        while (mapa[filajugador1][columnjugador1] != " "){
            console.log("Esa casilla ya esta llena, prueba con otra.");
            filajugador1 = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar ${jugador1}: `) - 1));
            verifi = esNumerico(filajugador1);
            //Volvemos a hacer la verificaion de rango y numerico dentro ya que tenemos que introducir todos los datos de nuevo.
            while ((filajugador1 < 0 || filajugador1 > 2) || verifi != true){
                console.log("Inroduce una posicion valida para jugar.");
                filajugador1 = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar ${jugador1}: `) - 1));
                verifi = esNumerico(filajugador1);
            }
            columnjugador1 = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar ${jugador1}: `) - 1));
            verifi = esNumerico(columnjugador1);
            while ((columnjugador1 < 0 || columnjugador1 > 2) || verifi != true){
                console.log("Inroduce una posicion valida para jugar.");
                columnjugador1 = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar ${jugador1}: `) - 1));
                verifi = esNumerico(columnjugador1);
            }
        }
        //Una vez esten las comprobaciones correctas asignamos a la posicion que hemos escogido el valor "x", que es nuestro simbolo de jugador.
        mapa[filajugador1][columnjugador1] = "x";
        interficie();
        jugadas++;
        
        let resultado = ralla(jugador1);
        //Aqui tenemos la condicion par que el valor que nos devuelva la funcion de ralla si es 0 no haga un break para salir de la iteracion.
        if (resultado == 0){
            break;
        }
        //Aqui tenemos la condicion de que si han pasado 9 jugadas acabe el juego con un empate.
        if (jugadas == 9){
            console.log("Empate, nadie a ganado esta partida.");
            break;
        }
        let filajugador2 = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar ${jugador2}: `) - 1));
        verifi = esNumerico(filajugador2);
        while ((filajugador2 < 0 || filajugador2 > 2) || verifi != true){
            console.log("Inroduce una posicion valida para jugar.");
            filajugador2 = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar ${jugador2}: `) - 1));
            verifi = esNumerico(filajugador2);
        }
        let columnjugador2 = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar ${jugador2}: `) - 1));
        verifi = esNumerico(columnjugador2);
        while ((columnjugador2 < 0 || columnjugador2 > 2) || verifi != true){
            console.log("Inroduce una posicion valida para jugar.");
            columnjugador2 = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar ${jugador2}: `) - 1));
            verifi = esNumerico(columnjugador2);
        }
        while (mapa[filajugador2][columnjugador2] != " "){
            console.log("Esa casilla ya esta llena, prueba con otra.");
            filajugador2 = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar ${jugador2}: `) - 1));
            verifi = esNumerico(filajugador2);
            while ((filajugador2 < 0 || filajugador2 > 2) || verifi != true){
                console.log("Inroduce una posicion valida para jugar.");
                filajugador2 = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar ${jugador2}: `) - 1));
                verifi = esNumerico(filajugador2);
            }
            columnjugador2 = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar ${jugador2}: `) - 1));
            verifi = esNumerico(columnjugador2);
            while ((columnjugador2 < 0 || columnjugador2 > 2) || verifi != true){
                console.log("Inroduce una posicion valida para jugar.");
                columnjugador2 = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar ${jugador2}: `) - 1));
                verifi = esNumerico(columnjugador2);
            }
        }
        mapa[filajugador2][columnjugador2] = "o";
        interficie();
        jugadas++;
        resultado = ralla(jugador2);
        if (resultado == 0){
            break;
        }
        if (jugadas == 9){
            console.log("Empate, nadie a ganado esta partida.");
            break;
        }
    }
}
//Aqui en este else lo que comienza es el modo de un jugador contra la Maquina.
else if (multi == 1) {
    //Llamamos a la funcion interficie para que nos muestre la cuadricula.
    interficie();
    //Iniciamos una varible con valor 0 para el while de las jugadas.
    let jugadas = 0;
    //Le pedimos al jugador que nos diga su nombre, de esta manera podeos utilizar las funciones anteriores.
    let jugador1 = prompt("Introduzca su nombre jugador 1: ");
    console.log(" ")
    //Le avisamos al jugador que va a jugar contra un maquina y asignamos Maquina a una varible llamada 
    console.log("Vas a jugar contra la Maquina")
    let jugador2 = "Maquina"
    while (jugadas != 9){
        let filajugador = (Number.parseInt(prompt("Introduce la fila en la quieres jugar: ") - 1));
        verifi = esNumerico(filajugador);
        while ((filajugador < 0 || filajugador > 2) || verifi != true){
            console.log("Inroduce una posicion valida para jugar.");
            filajugador = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar: `) - 1));
            verifi = esNumerico(filajugador);
        }
        let columnjugador = (Number.parseInt(prompt("Introduce la columna en la quieres jugar: ") - 1));
        verifi = esNumerico(columnjugador);
        while ((columnjugador < 0 || columnjugador > 2) || verifi != true){
            console.log("Inroduce una posicion valida para jugar.");
            columnjugador = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar: `) - 1));
            verifi = esNumerico(columnjugador);
        }
        while (mapa[filajugador][columnjugador] != " "){
            console.log("Esa casilla ya esta llena, prueba con otra.");
            filajugador = (Number.parseInt(prompt("Introduce la fila en la quieres jugar: ") - 1));
            verifi = esNumerico(filajugador);
            while ((filajugador < 0 || filajugador > 2) || verifi != true){
                console.log("Inroduce una posicion valida para jugar.");
                filajugador = (Number.parseInt(prompt(`Introduce la fila en la quieres jugar: `) - 1));
                verifi = esNumerico(filajugador);
            }
            columnjugador = (Number.parseInt(prompt("Introduce la columna en la quieres jugar: ") - 1));
            verifi = esNumerico(columnjugador);
            while ((columnjugador < 0 || columnjugador > 2) || verifi != true){
                console.log("Inroduce una posicion valida para jugar.");
                columnjugador = (Number.parseInt(prompt(`Introduce la columna en la quieres jugar: `) - 1));
                verifi = esNumerico(columnjugador);
            }
        }
        mapa[filajugador][columnjugador] = "x";
        interficie();
        jugadas++;
        let resultado = ralla(jugador1);
        if (resultado == 0){
            break;
        }
        if (jugadas == 9){
            console.log("Empate, nadie a ganado esta partida.");
            break;
        }
        //Hacemos que la funcion Math.random 
        let filaMaquina = Number.parseInt((Math.random() * 3));
        let columnMaquina = Number.parseInt((Math.random() * 3));
        while (mapa[filaMaquina][columnMaquina] != " "){
            filaMaquina = Number.parseInt((Math.random() * 3));
            columnMaquina = Number.parseInt((Math.random() * 3));
        }
        jugadas++;
        console.log(filaMaquina)
        console.log(columnMaquina)
        mapa[filaMaquina][columnMaquina] = "o";
        interficie();
        resultado = ralla(jugador2);
        if (resultado == 0){
            break;
        }
        if (jugadas == 9){
            console.log("Empate, nadie a ganado esta partida.");
            break;     
        }
        console.log(jugadas)
    }
}