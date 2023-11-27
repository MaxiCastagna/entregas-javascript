//alert()

let vidaSamid = 100;
let vidaViale = 100;


let round = 0;

const MIN_POWER = 5;
const MAX_POWER = 20;

while( (vidaSamid > 0) && (vidaViale > 0)){
    round+=1
let piñaSamid = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER ) + MIN_POWER) ;
let piñaViale = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER ) + MIN_POWER);

console.log("-------------------ROUND" + round + "-----------------------------");
if(piñaSamid === piñaViale){
    console.log("no hay impacto")
}else if( piñaSamid > piñaViale){
  //  console.log("Samid pega con una fuerza de " + piñaSamid)
    vidaViale -= piñaSamid
    if(vidaSamid < 0){
        vidaSamid = 0;
    console.log("la vida de Viale baja a " + vidaViale);


}else{
    console.log("Viale pega con una fuerza de " + piñaViale)
    vidaSamid -= piñaViale;
    if(vidaViale < 0){
        vidaViale = 0;
    }
    console.log("la vida de Samid baja a " + vidaSamid);
}
}

console.log("-----------MURIO--------------");

if(vidaSamid < 0){
    console.log("Murio Samid");
}else {
    console.log("Murio Viale")
}}