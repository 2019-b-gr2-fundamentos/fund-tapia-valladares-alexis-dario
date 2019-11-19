//DO WHILE
let vecesQueHeComido = 0;
do {
    console.log('Vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
            console.log("Desayuno");
            break;
        case 2:
            console.log("Almmuerzo");
            break;
        case 3:
            console.log("Merienda");
            break;
        default:
            console.log("Gordito");
            break;
    }
} while (vecesQueHeComido < 3);
console.log(`\n------${vecesQueHeComido}------\n`);
vecesQueHeComido = 0;
while (vecesQueHeComido < 3) {
    console.log('Vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
            console.log("Desayuno");
            break;
        case 2:
            console.log("Almmuerzo");
            break;
        case 3:
            console.log("Merienda");
            break;
        default:
            console.log("Gordito");
            break;
    }
}
console.log(`\n------${vecesQueHeComido}------\n`);
