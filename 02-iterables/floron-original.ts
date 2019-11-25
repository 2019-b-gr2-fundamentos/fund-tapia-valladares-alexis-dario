const arreglo2 = [];

let jugadores = 10;

for(let i=0; i <jugadores; i++){
    arreglo2.push(Math.floor(Math.random()*1));//solo de ceros
}

console.log(arreglo2);

let indiceRandom = (Math.floor(Math.random()*(jugadores)))

arreglo2[indiceRandom]=1;

console.log(arreglo2);

