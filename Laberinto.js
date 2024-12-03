const prompt = require("prompt-sync")({ sigint: true });

let gana = null;
let espacios1 = 0;
let espacios2 = 0;
let espacios3 = 0;
let horainicio;
let horafinal;

let lab1 = [
    ["#","#","#","#","#","#"],
    ["#","U"," ","#","o","#"],
    ["#","#"," "," "," ","#"],
    ["#","#","#","#","#","#"]
];
for (let i = 0; i < lab1.length; i++){
    for (let d = 0; d < lab1[i].length; d++){
        if (lab1[i][d] != "#"){
            espacios1++;
        }
    }
}

let lab2 = [
    ["#","#","#","#","#","#","#","#"],
    ["#","U"," "," "," "," "," ","#"],
    ["#","#"," ","#","#","#"," ","#"],
    ["#"," "," "," ","#","#"," ","#"],
    ["#"," ","#"," ","#","o"," ","#"],
    ["#","#","#","#","#","#","#","#"]
];
for (let i = 0; i < lab2.length; i++){
    for (let d = 0; d < lab2[i].length; d++){
        if (lab2[i][d] != "#"){
            espacios2++;
        }
    }
}

let lab3 = [
    ["#","#","#","#","#","#","#","#","#","#"],
    ["#","U","#"," ","#"," "," "," "," ","#"],
    ["#"," ","#"," "," "," ","#","#"," ","#"],
    ["#"," "," ","#"," ","#","#","#"," ","#"],
    ["#"," ","#"," "," ","#"," "," "," ","#"],
    ["#"," ","#"," ","#","#"," ","#"," ","#"],
    ["#"," "," "," ","#","#","o","#"," ","#"],
    ["#","#","#","#","#","#","#","#","#","#"]
];
for (let i = 0; i < lab3.length; i++){
    for (let d = 0; d < lab3[i].length; d++){
        if (lab3[i][d] != "#"){
            espacios3++;
        }
    }
}

let pasos = 0;
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
    let movimiento;
    let fil = 1;
    let col = 1;
    pasos = 0;
    gana = null;
    do{
        opcion = Number.parseInt(prompt("Introduce el numero de laberinto al que quieres entrar (1,2,3,4):"));
        console.clear()
    }while(opcion < 1 || opcion > 4 );
    console.clear()
    if(opcion == 1){
        console.log("Tienes 3 opciones:")
        console.log(" ")
        console.log("1) Mostrar el laberinto")
        console.log("2) Jugar el laberinto")
        console.log("3) Volver atras")
        console.log(" ")
        while(gana == null){
            opcion = Number.parseInt(prompt("Escoge una de las opciones mostradas (1,2,3): "))
            console.clear()
            if(opcion == 1){
                console.clear()
                console.log(lab1[0][0],lab1[0][1],lab1[0][2],lab1[0][3],lab1[0][4],lab1[0][5])
                console.log(lab1[1][0],lab1[1][1],lab1[1][2],lab1[1][3],lab1[1][4],lab1[1][5])
                console.log(lab1[2][0],lab1[2][1],lab1[2][2],lab1[2][3],lab1[2][4],lab1[2][5])
                console.log(lab1[3][0],lab1[3][1],lab1[3][2],lab1[3][3],lab1[3][4],lab1[3][5])
            }
            else if(opcion == 2){
                do{
                    do{
                        if(i == 0){
                            horainicio = new Date()
                        }
                        console.log(lab1[0][0],lab1[0][1],lab1[0][2],lab1[0][3],lab1[0][4],lab1[0][5])
                        console.log(lab1[1][0],lab1[1][1],lab1[1][2],lab1[1][3],lab1[1][4],lab1[1][5])
                        console.log(lab1[2][0],lab1[2][1],lab1[2][2],lab1[2][3],lab1[2][4],lab1[2][5])
                        console.log(lab1[3][0],lab1[3][1],lab1[3][2],lab1[3][3],lab1[3][4],lab1[3][5])
                        console.log("1) Norte")
                        console.log("2) Este")
                        console.log("3) Sud")
                        console.log("4) Oeste")
                        movimiento = Number.parseInt(prompt("   Movimiento: "))
                        console.clear()
                    }while(movimiento < 1 || movimiento > 4)
                    if(movimiento == 1){
                        if(pasos <= espacios1){
                            if(lab1[fil-1][col] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab1[fil-1][col] == " "){
                                lab1[fil][col] = " "
                                fil--;
                                lab1[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab1[fil-1][col] == "o"){
                                lab1[fil][col] = " "
                                fil--;
                                lab1[fil][col] = "U"
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
                            if(lab1[fil][col+1] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab1[fil][col+1] == " "){
                                lab1[fil][col] = " "
                                col++;
                                lab1[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab1[fil][col+1] == "o"){
                                lab1[fil][col] = " "
                                col++;
                                lab1[fil][col] = "U"
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
                            if(lab1[fil+1][col] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab1[fil+1][col] == " "){
                                lab1[fil][col] = " "    
                                fil++;
                                lab1[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab1[fil+1][col] == "o"){
                                lab1[fil][col] = " "
                                fil++;
                                lab1[fil][col] = "U"
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
                            if(lab1[fil][col-1] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab1[fil][col-1] == " "){
                                lab1[fil][col] = " "
                                col--;
                                lab1[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab1[fil][col-1] == "o"){
                                lab1[fil][col] = " "
                                col--;
                                lab1[fil][col] = "U"
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
            }
            else if(opcion == 3){
                console.clear()
                break;
            }
        }
    }
    else if(opcion == 2){
        console.log("Tienes 3 opciones:")
        console.log(" ")
        console.log("1) Mostrar el laberinto")
        console.log("2) Jugar el laberinto")
        console.log("3) Volver atras")
        console.log(" ")
        while(gana == null){
            opcion = Number.parseInt(prompt("Escoge una de las opciones mostradas (1,2,3): "))
            console.clear()
            if(opcion == 1){
                console.clear()
                console.log(lab2[0][0],lab2[0][1],lab2[0][2],lab2[0][3],lab2[0][4],lab2[0][5],lab2[0][6],lab2[0][7])
                console.log(lab2[1][0],lab2[1][1],lab2[1][2],lab2[1][3],lab2[1][4],lab2[1][5],lab2[1][6],lab2[1][7])
                console.log(lab2[2][0],lab2[2][1],lab2[2][2],lab2[2][3],lab2[2][4],lab2[2][5],lab2[2][6],lab2[2][7])
                console.log(lab2[3][0],lab2[3][1],lab2[3][2],lab2[3][3],lab2[3][4],lab2[3][5],lab2[3][6],lab2[3][7])
                console.log(lab2[4][0],lab2[4][1],lab2[4][2],lab2[4][3],lab2[4][4],lab2[4][5],lab2[4][6],lab2[4][7])
                console.log(lab2[5][0],lab2[5][1],lab2[5][2],lab2[5][3],lab2[5][4],lab2[5][5],lab2[5][6],lab2[5][7])
            }
            else if(opcion == 2){
                do{
                    do{
                        if(i == 0){
                            horainicio = new Date()
                        }
                        console.log(lab2[0][0],lab2[0][1],lab2[0][2],lab2[0][3],lab2[0][4],lab2[0][5],lab2[0][6],lab2[0][7])
                        console.log(lab2[1][0],lab2[1][1],lab2[1][2],lab2[1][3],lab2[1][4],lab2[1][5],lab2[1][6],lab2[1][7])
                        console.log(lab2[2][0],lab2[2][1],lab2[2][2],lab2[2][3],lab2[2][4],lab2[2][5],lab2[2][6],lab2[2][7])
                        console.log(lab2[3][0],lab2[3][1],lab2[3][2],lab2[3][3],lab2[3][4],lab2[3][5],lab2[3][6],lab2[3][7])
                        console.log(lab2[4][0],lab2[4][1],lab2[4][2],lab2[4][3],lab2[4][4],lab2[4][5],lab2[4][6],lab2[4][7])
                        console.log(lab2[5][0],lab2[5][1],lab2[5][2],lab2[5][3],lab2[5][4],lab2[5][5],lab2[5][6],lab2[5][7])
                        console.log("1) Norte")
                        console.log("2) Este")
                        console.log("3) Sud")
                        console.log("4) Oeste")
                        movimiento = Number.parseInt(prompt("   Movimiento: "))
                        console.clear()
                    }while(movimiento < 1 || movimiento > 4)
                    if(movimiento == 1){
                        if(pasos <= espacios2){
                            if(lab2[fil-1][col] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab2[fil-1][col] == " "){
                                lab2[fil][col] = " "
                                fil--;
                                lab2[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab2[fil-1][col] == "o"){
                                lab2[fil][col] = " "
                                fil--;
                                lab2[fil][col] = "U"
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
                        if(pasos <= espacios2){
                            if(lab2[fil][col+1] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab2[fil][col+1] == " "){
                                lab2[fil][col] = " "
                                col++;
                                lab2[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab2[fil][col+1] == "o"){
                                lab2[fil][col] = " "
                                col++;
                                lab2[fil][col] = "U"
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
                        if(pasos <= espacios2){
                            if(lab2[fil+1][col] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab2[fil+1][col] == " "){
                                lab2[fil][col] = " "
                                fil++;
                                lab2[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab2[fil+1][col] == "o"){
                                lab2[fil][col] = " "
                                fil++;
                                lab2[fil][col] = "U"
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
                        if(pasos <= espacios2){
                            if(lab2[fil][col-1] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab2[fil][col-1] == " "){
                                lab2[fil][col] = " "
                                col--;
                                lab2[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab2[fil][col-1] == "o"){
                                lab2[fil][col] = " "
                                col--;
                                lab2[fil][col] = "U"
                                console.log("!!Has ganado!!")
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
            }
            else if(opcion == 3){
                console.clear()
                break;
            }
        }
    }
    else if(opcion == 3){
        console.log("Tienes 3 opciones:")
        console.log(" ")
        console.log("1) Mostrar el laberinto")
        console.log("2) Jugar el laberinto")
        console.log("3) Volver atras")
        console.log(" ")
        while(gana == null){
            opcion = Number.parseInt(prompt("Escoge una de las opciones mostradas (1,2,3): "))
            console.clear()
            if(opcion == 1){
                console.clear()
                console.log(lab3[0][0],lab3[0][1],lab3[0][2],lab3[0][3],lab3[0][4],lab3[0][5],lab3[0][6],lab3[0][7],lab3[0][8],lab3[0][9])
                console.log(lab3[1][0],lab3[1][1],lab3[1][2],lab3[1][3],lab3[1][4],lab3[1][5],lab3[1][6],lab3[1][7],lab3[1][8],lab3[1][9])
                console.log(lab3[2][0],lab3[2][1],lab3[2][2],lab3[2][3],lab3[2][4],lab3[2][5],lab3[2][6],lab3[2][7],lab3[2][8],lab3[2][9])
                console.log(lab3[3][0],lab3[3][1],lab3[3][2],lab3[3][3],lab3[3][4],lab3[3][5],lab3[3][6],lab3[3][7],lab3[3][8],lab3[3][9])
                console.log(lab3[4][0],lab3[4][1],lab3[4][2],lab3[4][3],lab3[4][4],lab3[4][5],lab3[4][6],lab3[4][7],lab3[4][8],lab3[4][9])
                console.log(lab3[5][0],lab3[5][1],lab3[5][2],lab3[5][3],lab3[5][4],lab3[5][5],lab3[5][6],lab3[5][7],lab3[5][8],lab3[5][9])
                console.log(lab3[6][0],lab3[6][1],lab3[6][2],lab3[6][3],lab3[6][4],lab3[6][5],lab3[6][6],lab3[6][7],lab3[6][8],lab3[6][9])
                console.log(lab3[7][0],lab3[7][1],lab3[7][2],lab3[7][3],lab3[7][4],lab3[7][5],lab3[7][6],lab3[7][7],lab3[7][8],lab3[7][9])
            }
            else if(opcion == 2){
                do{
                    do{
                        if(i == 0){
                            horainicio = new Date()
                        }
                        console.log(lab3[0][0],lab3[0][1],lab3[0][2],lab3[0][3],lab3[0][4],lab3[0][5],lab3[0][6],lab3[0][7],lab3[0][8],lab3[0][9])
                        console.log(lab3[1][0],lab3[1][1],lab3[1][2],lab3[1][3],lab3[1][4],lab3[1][5],lab3[1][6],lab3[1][7],lab3[1][8],lab3[1][9])
                        console.log(lab3[2][0],lab3[2][1],lab3[2][2],lab3[2][3],lab3[2][4],lab3[2][5],lab3[2][6],lab3[2][7],lab3[2][8],lab3[2][9])
                        console.log(lab3[3][0],lab3[3][1],lab3[3][2],lab3[3][3],lab3[3][4],lab3[3][5],lab3[3][6],lab3[3][7],lab3[3][8],lab3[3][9])
                        console.log(lab3[4][0],lab3[4][1],lab3[4][2],lab3[4][3],lab3[4][4],lab3[4][5],lab3[4][6],lab3[4][7],lab3[4][8],lab3[4][9])
                        console.log(lab3[5][0],lab3[5][1],lab3[5][2],lab3[5][3],lab3[5][4],lab3[5][5],lab3[5][6],lab3[5][7],lab3[5][8],lab3[5][9])
                        console.log(lab3[6][0],lab3[6][1],lab3[6][2],lab3[6][3],lab3[6][4],lab3[6][5],lab3[6][6],lab3[6][7],lab3[6][8],lab3[6][9])
                        console.log(lab3[7][0],lab3[7][1],lab3[7][2],lab3[7][3],lab3[7][4],lab3[7][5],lab3[7][6],lab3[7][7],lab3[7][8],lab3[7][9])
                        console.log("1) Norte")
                        console.log("2) Este")
                        console.log("3) Sud")
                        console.log("4) Oeste")
                        movimiento = Number.parseInt(prompt("   Movimiento: "))
                        console.clear()
                    }while(movimiento < 1 || movimiento > 4)
                    if(movimiento == 1){
                        if(pasos <= espacios3){
                            if(lab3[fil-1][col] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab3[fil-1][col] == " "){
                                lab3[fil][col] = " "
                                fil--;
                                lab3[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab3[fil-1][col] == "o"){
                                lab3[fil][col] = " "
                                fil--;
                                lab3[fil][col] = "U"
                                console.log("!!Has ganado!!")
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
                        if(pasos <= espacios3){
                            if(lab3[fil][col+1] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab3[fil][col+1] == " "){
                                lab3[fil][col] = " "
                                col++;
                                lab3[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab3[fil][col+1] == "o"){
                                lab3[fil][col] = " "
                                col++;
                                lab3[fil][col] = "U"
                                console.log("!!Has ganado!!")
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
                        if(pasos <= espacios3){
                            if(lab3[fil+1][col] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab3[fil+1][col] == " "){
                                lab3[fil][col] = " "
                                fil++;
                                lab3[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab3[fil+1][col] == "o"){
                                lab3[fil][col] = " "
                                fil++;
                                lab3[fil][col] = "U"
                                console.log("!!Has ganado!!")
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
                        if(pasos <= espacios3){
                            if(lab3[fil][col-1] == "#"){
                                console.log("ERROR: El moviment no es valid:")
                            }
                            else if(lab3[fil][col-1] == " "){
                                lab3[fil][col] = " "
                                col--;
                                lab3[fil][col] = "U"
                                pasos++;
                            }
                            else if(lab3[fil][col-1] == "o"){
                                lab3[fil][col] = " "
                                col--;
                                lab3[fil][col] = "U"
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