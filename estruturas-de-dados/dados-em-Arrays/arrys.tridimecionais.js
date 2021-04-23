var todasSemana = [];
let primeirasSemanas =[];
let segundasSemanas =[];


const semana1 = [23,42,20,30];
const semana2 = [21,29,65,10];

const semana3 = [23,42,20,30];
const semana4 = [21,29,65,10];

primeirasSemanas =[semana1, semana2];
segundasSemanas =[semana3, semana4];

todasSemana = [primeirasSemanas, segundasSemanas];

//console.log(todasSemana[2-1]);
//console.log(todasSemana[0][1][3]);
for(let i =0 ; i < todasSemana.length; i++){
  for(let y =0; y < todasSemana[i].length; y++){
    console.log(`\narray--${todasSemana[i]} posicao:${i}-${y}\n`)
  for(let x =0; x < todasSemana[i][y].length; x++){
    console.log(`posicao:${y}-${x} -- ${todasSemana[i][y][x]}`);
  }
}
  
}
