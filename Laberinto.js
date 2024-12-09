const prompt = require("prompt-sync")({ sigint: true });
let gana = null;
let horainicio;
let horafinal;
function conteo_espacios(laberinto){
    let espacios = 0;
    for (let i = 0; i < laberinto.length; i++){
        for (let d = 0; d < laberinto[i].length; d++){
            if (laberinto[i][d] != "#"){
                espacios++;
            }
        }
    }
    return espacios;
}
function mapa(laberinto){
    for(let i = 0; i < laberinto.length; i++){
        for(let j = 0; j < laberinto[i].length; j++){
            process.stdout.write(laberinto[i][j] + " ");
        }
        console.log(" ")
    }
}
function juego(laberinto){
    i = 0;
    espacios1 = conteo_espacios(laberinto);
    let movimiento;
    let fil = 1;
    let col = 1;
    let pasos = 0;
    do{
        do{
            if(i == 0){
                horainicio = new Date()
            }
            for(let i = 0; i < laberinto.length; i++){
                for(let j = 0; j < laberinto[i].length; j++){
                    process.stdout.write(laberinto[i][j] + " ");
                    
                }
                console.log(" ")
            }
            console.log("1) Norte")
            console.log("2) Este")
            console.log("3) Sud")
            console.log("4) Oeste")
            movimiento = Number.parseInt(prompt("   Movimiento: "))
            console.clear()
        }while(movimiento < 1 || movimiento > 4)
        if(movimiento == 1){
            if(pasos <= espacios1){
                if(laberinto[fil-1][col] == "#"){
                    console.log("ERROR: El moviment no es valid:")
                }
                else if(laberinto[fil-1][col] == " "){
                    laberinto[fil][col] = " "
                    fil--;
                    laberinto[fil][col] = "U"
                    pasos++;
                }
                else if(laberinto[fil-1][col] == "o"){
                    laberinto[fil][col] = " "
                    fil--;
                    laberinto[fil][col] = "U"
                    gana = true;
                    horafinal = new Date()
                    break;
                }
            }
            else{
                gana = false;
                horafinal = new Date()
                break;
            }
        }
        else if(movimiento == 2){
            if(pasos <= espacios1){
                if(laberinto[fil][col+1] == "#"){
                    console.log("ERROR: El moviment no es valid:")
                }
                else if(laberinto[fil][col+1] == " "){
                    laberinto[fil][col] = " "
                    col++;
                    laberinto[fil][col] = "U"
                    pasos++;
                }
                else if(laberinto[fil][col+1] == "o"){
                    laberinto[fil][col] = " "
                    col++;
                    laberinto[fil][col] = "U"
                    gana = true;
                    horafinal = new Date()
                    
                    break;
                }
            }
            else{
                gana = false;
                horafinal = new Date()
                break;
            }
        }
        else if(movimiento == 3){
            if(pasos <= espacios1){
                if(laberinto[fil+1][col] == "#"){
                    console.log("ERROR: El moviment no es valid:")
                }
                else if(laberinto[fil+1][col] == " "){
                    laberinto[fil][col] = " "    
                    fil++;
                    laberinto[fil][col] = "U"
                    pasos++;
                }
                else if(laberinto[fil+1][col] == "o"){
                    laberinto[fil][col] = " "
                    fil++;
                    laberinto[fil][col] = "U"
                    gana = true;
                    horafinal = new Date()
                    break;
                }
            }
            else{
                gana = false;
                horafinal = new Date()
                break;
            }
        }
        else if(movimiento == 4){
            if(pasos <= espacios1){
                if(laberinto[fil][col-1] == "#"){
                    console.log("ERROR: El moviment no es valid:")
                }
                else if(laberinto[fil][col-1] == " "){
                    laberinto[fil][col] = " "
                    col--;
                    laberinto[fil][col] = "U"
                    pasos++;
                }
                else if(laberinto[fil][col-1] == "o"){
                    laberinto[fil][col] = " "
                    col--;
                    laberinto[fil][col] = "U"
                    gana = true;
                    horafinal = new Date()
                    break;
                }
            }
            else{
                gana = false;
                horafinal = new Date()
                break;
            }
        }
        i++;
    }while(gana == null)

    return pasos;
}
function menu(){
    console.log("Tienes 3 opciones:")
    console.log(" ")
    console.log("1) Mostrar el laberinto")
    console.log("2) Jugar el laberinto")
    console.log("3) Volver atras")
    console.log(" ")
}
do{
    lab1 = [
        ["#","#","#","#","#","#"],
        ["#","U"," ","#","o","#"],
        ["#","#"," "," "," ","#"],
        ["#","#","#","#","#","#"]
    ];
    lab2 = [
        ["#","#","#","#","#","#","#","#"],
        ["#","U"," ","#"," "," "," ","#"],
        ["#","#"," ","#"," ","#"," ","#"],
        ["#"," "," "," "," ","#"," ","#"],
        ["#"," ","#"," ","#","o"," ","#"],
        ["#","#","#","#","#","#","#","#"]
    ];
    lab3 = [
        ["#","#","#","#","#","#","#","#","#","#"],
        ["#","U","#"," ","#"," "," "," "," ","#"],
        ["#"," ","#"," "," "," ","#","#"," ","#"],
        ["#"," "," ","#"," ","#","#","#"," ","#"],
        ["#"," ","#"," "," ","#"," "," "," ","#"],
        ["#"," ","#"," ","#","#"," ","#"," ","#"],
        ["#"," "," "," ","#","#","o","#"," ","#"],
        ["#","#","#","#","#","#","#","#","#","#"]
    ];
    let i = 0;
    console.clear()
    console.log("****LABERINTO****");
    console.log(" ");
    if(gana == null){
        console.log("Tenemos tres niveles de laberintos:");
    }
    else if(gana == true){
        let milisegundos = horafinal.getTime() - horainicio.getTime(); 
        let total = (milisegundos / 1000);
        console.log("Has ganado, vuelve a jugar o intenta un nivel nuevo:");
        console.log(`Has hecho ${pasos} pasos`)
        console.log(`Tiempo ${total}s`)
    }
    else if(gana == false){
        let milisegundos = horafinal.getTime() - horainicio.getTime(); 
        let total = (milisegundos / 1000);
        console.log("Has perdido, no has conseguido encontrar el objetivo:");
        console.log(`Has hecho ${pasos} pasos`)
        console.log(`Tiempo ${total}s`)
    }
    console.log(" ");
    console.log("1) Laberinto para los principiantes");
    console.log("2) Laberinto para los entendidos");
    console.log("3) Laberinto para los maestros");
    console.log("4) Salir del juego");
    let opcion;
    gana = null;
    do{
        opcion = Number.parseInt(prompt("Introduce el numero de laberinto al que quieres entrar (1,2,3,4):"));
        console.clear()
    }while(opcion < 1 || opcion > 4 );
    console.clear()
    if(opcion == 1){
        while(gana == null){
            menu();
            opcion = Number.parseInt(prompt("Escoge una de las opciones mostradas (1,2,3): "))
            console.clear()
            if(opcion == 1){
                console.clear()
                mapa(lab1);
            }
            else if(opcion == 2){
                pasos = juego(lab1);
            }
            else if(opcion == 3){
                console.clear()
                break;
            }
        }
    }
    else if(opcion == 2){
        while(gana == null){
            menu();
            opcion = Number.parseInt(prompt("Escoge una de las opciones mostradas (1,2,3): "))
            console.clear()
            if(opcion == 1){
                console.clear()
                mapa(lab2);
            }
            else if(opcion == 2){
                pasos = juego(lab2);
            }
            else if(opcion == 3){
                console.clear()
                break;
            }
        }
    }
    else if(opcion == 3){
        while(gana == null){
            menu();
            opcion = Number.parseInt(prompt("Escoge una de las opciones mostradas (1,2,3): "))
            console.clear()
            if(opcion == 1){
                console.clear()
                mapa(lab3);
            }
            else if(opcion == 2){
                pasos = juego(lab3);
            }
            else if(opcion == 3){
                console.clear()
                break;
            }
        }
    }
    else if(opcion == 4){
        console.log("")
        console.log("!!Gracias por jugar, hasta la proxima!!")
        console.log("")
        break;
    }
}while(true)