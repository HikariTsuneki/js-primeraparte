function Distancias(){
    const distancia = prompt ('Ingrese dist: ', '');


    if (distancia <= 1000)
        alert ('Medio de transporte: pie')
    else if (distancia > 1001 && distancia <= 10000)
        alert ('Medio de transporte: Bicicleta')
    else if (distancia > 10001 && distancia <= 30000)
        alert ('Medio de transporte: Colectivo')
    else if (distancia > 30001 && distancia <= 100000)
        alert ('Medio de transporte: Auto')
    else if (distancia > 100001)
        alert('Su transporte es: Avión')

}

function numeroMayor(){
    let mayor = 0;

    for(var i = 0; i < 5; i++){
        const numero = parseInt(prompt("Ingrese los numeros: "));

        if(numero > mayor){
            mayor = numero;
        }
    }

    alert('El numero mayor ingresado es: ' + mayor)
}

function numerosArray(){
    let mayor = 0;

    const numero = prompt("Ingrese los numeros: ");

    var numeros = numero.split("/");


    for(var i = 0; i < numeros.length; i++){
        if(parseInt(numeros[i]) > mayor){
            mayor = parseInt(numeros[i]);
        }
    }
    

    alert('El numero mayor ingresado es: ' + mayor)
}