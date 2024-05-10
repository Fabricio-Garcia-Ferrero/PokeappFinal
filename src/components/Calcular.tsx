import { ITipo } from "./Interfaces";

const tipos: ITipo<number> = {
  normal: 0,
  fighting: 1,
  flying: 2,
  poison: 3,
  ground: 4,
  rock: 5,
  bug: 6,
  ghost: 7,
  steel: 8,
  fire: 9,
  water: 10,
  grass: 11,
  electric: 12,
  psychic: 13,
  ice: 14,
  dragon: 15,
  dark: 16,
  fairy: 17,
  Ninguno: 18
}

const debilidades = [
  [1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //Normal
  [1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 2], //Lucha
  [1, 0.5, 1, 1, 0, 2, 0.5, 1, 1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1], //Volador
  [1, 0.5, 1, 0.5, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 2, 1, 1, 1, 0.5], //Veneno
  [1, 1, 1, 0.5, 1, 0.5, 1, 1, 1, 1, 2, 2, 0, 1, 2, 1, 1, 1], //Tierra
  [0.5, 2, 0.5, 0.5, 2, 1, 1, 1, 2, 0.5, 2, 2, 1, 1, 1, 1, 1, 1], //Roca
  [1, 0.5, 2, 1, 0.5, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 1, 1], //Bicho
  [0, 0, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1], //Fantasma
  [0.5, 2, 0.5, 0, 2, 0.5, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 1, 0.5], //Acero
  [1, 1, 1, 1, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 0.5, 1, 1, 0.5], //Fuego
  [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 2, 2, 1, 0.5, 1, 1, 1], //Agua
  [1, 1, 2, 2, 0.5, 1, 2, 1, 1, 2, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1], //Planta
  [1, 1, 0.5, 1, 2, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1], //Eléctrico
  [1, 0.5, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 2, 1], //Psíquico
  [1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 0.5, 1, 1, 1], //Hielo
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 2, 2, 1, 2], //Dragón
  [1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 2], //Siniestro
  [1, 0.5, 1, 2, 1, 1, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0.5, 1], //Hada
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  //Ninguno
]

function calcular(tipo1: string | undefined, tipo2: string | undefined) {

  if (!!tipo1 && !!tipo2) {
    const valorTipo1: number = tipos[tipo1];
    let valorTipo2: number = 0

    if(!!tipo2){
      valorTipo2 = tipos[tipo2];
    }else{
      valorTipo2 = tipos[18];
    }

    const deb1 = debilidades[valorTipo1];
    const deb2 = debilidades[valorTipo2];

    const debTotal = deb1.map((valor, indice) => valor * deb2[indice])

    const result: |ITipo<number> = {
      Normal: debTotal[0],
      Lucha: debTotal[1],
      Volador: debTotal[2],
      Veneno: debTotal[3],
      Tierra: debTotal[4],
      Roca: debTotal[5],
      Bicho: debTotal[6],
      Fantasma: debTotal[7],
      Acero: debTotal[8],
      Fuego: debTotal[9],
      Agua: debTotal[10],
      Planta: debTotal[11],
      Eléctrico: debTotal[12],
      Psíquico: debTotal[13],
      Hielo: debTotal[14],
      Dragón: debTotal[15],
      Siniestro: debTotal[16],
      Hada: debTotal[17],
    }
    return result;
  }else{
    return console.error("Fallo en los tipos");
    
  }
}

export { calcular };