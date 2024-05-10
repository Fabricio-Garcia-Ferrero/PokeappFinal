import { IPokemon } from "./Interfaces";
import { MdFavoriteBorder } from "react-icons/md";
import { addFavorite } from "../config/firebase";
import { IPokeFavData, ITipo } from "./Interfaces";
import { useEffect, useState } from "react";
import { RiSparkling2Fill } from "react-icons/ri";
import { IPokemonSpecie } from "./Interfaces2";
import axios from "axios";
import exportFromJSON from "export-from-json";
import { MdDownload } from "react-icons/md";
import { AiOutlineRollback } from "react-icons/ai";

interface PokedexProps {
  pokemon: IPokemon;
  onClick: () => void;
}

export function PokedexComponent({ pokemon, onClick }: PokedexProps) {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonSpecie>();

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
    Ninguno: 18,
  };

  function toTittle(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  function getGen(text: string): string {
    const index = text.indexOf("-");
    if (index !== -1) {
      return text.substring(index + 1).toUpperCase();
    }
    return "";
  }

  const pokeFav: IPokeFavData = {
    name: pokemon.name,
    sprite: pokemon.sprites.front_default,
  };

  const addFav = async () => {
    if (pokemon?.id !== undefined) {
      addFavorite(pokeFav, pokemon.id);
    }
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
      .then((res) => setPokemonInfo(res.data));
  }, []);

  const [shiny, setShiny] = useState<boolean>(false);

  const getDescription = () => {
    if (!!pokemonInfo?.flavor_text_entries) {
      for (let i = 0; i < pokemonInfo.flavor_text_entries.length; i++) {
        if (pokemonInfo.flavor_text_entries[i].language.name === "en") {
          return pokemonInfo.flavor_text_entries[i].flavor_text.replace(
            /[\f]/g,
            " "
          );
        }
      }
    } else {
      return "";
    }
  };

  const exportToCSV = () => {
    const data = [
      {
        id: pokemon.id,
        name: pokemon.name,
        gen: pokemonInfo?.generation.name,
        type1: pokemon.types[0].type.name,
        type2: pokemon.types[1]?.type.name,
        hp: pokemon.stats[0].base_stat,
        atk: pokemon.stats[1].base_stat,
        spatk: pokemon.stats[2].base_stat,
        def: pokemon.stats[3].base_stat,
        spdef: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
        weight: pokemon.weight,
        height: pokemon.height,
        sprite: pokemon.sprites.front_default,
        sprite_shiny: pokemon.sprites.front_shiny,
        description: getDescription(),
      },
    ];

    const fileName = pokemon.name;
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <div className="bg-red-600 w-[1000px] h-[600px] mt-9 grid grid-cols-2 outline-8 outline-red-900 outline rounded-3xl relative">
      <button>
        <div
          onClick={onClick}
          className="absolute top-[17px] left-[16px] w-[80px] h-[80px] flex justify-center items-center z-50 hover:scale-150 active:scale-90 transition-transform duration-200"
        >
          <AiOutlineRollback className=" scale-150 active:scale-110" />
        </div>
      </button>
      <div className=" bg-white border-2 border-black absolute top-[405px] left-[340px] w-[40px] h-[40px] rounded-lg flex items-center justify-center z-50">
        <button
          className="scale:110 hover:scale-125 active:scale-90 transition-transform duration-200"
          onClick={exportToCSV}
        >
          <MdDownload />
        </button>
      </div>
      <div className="absolute flex justify-between items-center bg-black border-2 text-white text-4xl h-16 w-[150px] top-8 left-64">
        <span className="ml-3 font-mono">#</span>
        <span className="mr-3 font-mono">{pokemon.id}</span>
      </div>
      <div className="absolute grid grid-cols-1 border-2 text-md h-28 w-[200px] top-[248px] right-9">
        <div className="grid grid-cols-5">
          <div className="flex justify-center items-center bg-black col-span-2">
            <span className="font-mono font-bold text-white">GEN</span>
          </div>
          <div className="col-span-3 flex justify-center items-center bg-yellow-400">
            <span className="ml-3 font-mono font-bold">
              {!!pokemonInfo ? getGen(pokemonInfo.generation.name) : "Unknown"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="flex justify-center items-center bg-black col-span-2">
            <span className="font-mono font-bold text-white">WEIGHT</span>
          </div>
          <div className="col-span-3 flex justify-center items-center bg-yellow-400">
            <span className="ml-3 font-mono font-bold">
              {pokemon.weight / 10} kg
            </span>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="flex justify-center items-center bg-black col-span-2">
            <span className="font-mono font-bold text-white overflow-hidden">
              HEIGHT
            </span>
          </div>
          <div className="col-span-3 flex justify-center items-center bg-yellow-400">
            <span className="ml-3 font-mono font-bold overflow-hidden">
              {pokemon.height / 10} mts
            </span>
          </div>
        </div>
      </div>
      <div className=" outline-red-900 outline-4 outline absolute top-0 left-[475px] h-full w-[50px] flex flex-col justify-around">
        <div className="border-red-900 border-y-4 w-full h-[75px]" />
        <div className="border-red-900 border-y-4 w-full h-[75px]" />
      </div>
      <div className="absolute top-7 right-9 outline outline-4 outline-white w-[200px] h-[90px] grid grid-cols-1">
        <div className=" bg-black text-white font-mono font-bold flex justify-center items-center text-lg">
          TYPE 1
        </div>
        <div className="bg-gray-300 font-mono font-bold flex justify-center items-center text-lg">
          <img
            className="w-[25px] h-[25px]"
            src={`/${tipos[pokemon.types[0].type.name]}.png`}
            alt="Pokémon type 1"
          />
          <span className="mx-2">{toTittle(pokemon.types[0].type.name)}</span>
          <img
            className="w-[25px] h-[25px]"
            src={`/${tipos[pokemon.types[0].type.name]}.png`}
            alt="Pokémon type 1"
          />
        </div>
      </div>
      <div className="absolute top-[136px] right-9 outline outline-4 outline-white w-[200px] h-[90px] grid grid-cols-1">
        <div className=" bg-black text-white font-mono font-bold flex justify-center items-center text-lg">
          TYPE 2
        </div>
        <div className="bg-gray-300 font-mono font-bold flex justify-center items-center text-lg">
          {pokemon.types.length > 1 ? (
            <img
              className="w-[25px] h-[25px]"
              src={`/${tipos[pokemon.types[1].type.name]}.png`}
              alt="Pokémon type 2"
            />
          ) : (
            ""
          )}
          <span className="mx-2">
            {pokemon.types.length > 1
              ? toTittle(pokemon.types[1].type.name)
              : "None"}
          </span>
          {pokemon.types.length > 1 ? (
            <img
              className="w-[25px] h-[25px]"
              src={`/${tipos[pokemon.types[1].type.name]}.png`}
              alt="Pokémon type 2"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <button onClick={() => setShiny(!shiny)}>
        <div className=" bg-white rounded-full border-2 border-black absolute z-50 top-28 left-[214px] w-[30px] h-[30px] flex justify-center items-center hover:scale-125 transition-transform duration-200 active:scale-90">
          <RiSparkling2Fill />
        </div>
      </button>
      <div className="absolute bg-gray-300 top-32 left-16 h-[350px] w-[350px] rounded-xl flex  justify-center items-center">
        <div className="bg-white flex justify-center h-[300px] w-[300px] ">
          <img
            src={
              shiny
                ? pokemon.sprites.front_shiny
                : pokemon.sprites.front_default
            }
            className=" h-[300px] w-[300px] border border-1 border-black"
            alt="Pokemon shiny"
          />
        </div>
      </div>
      <div className="bg-blue-400 rounded-full absolute top-4 left-4 w-[80px] h-[80px] outline outline-gray-300 outline-4 flex justify-center items-center"></div>
      <button onClick={addFav}>
        <div className=" bg-gray-300 h-[75px] w-[75px] absolute bottom-2 left-2 rounded-3xl outline outline-black flex justify-center items-center">
          <MdFavoriteBorder className="h-[40px] w-[40px] hover:scale-125 active:scale-90 mt-1 transition-transform duration-200" />
        </div>
      </button>
      <div className="absolute bg-lime-500 border-2 flex flex-col items-start w-[320px] h-16 bottom-4 left-24 overflow-hidden justify-center">
        <span className=" font-mono text-2xl mx-2 font-bold">
          {toTittle(pokemon.name)}
        </span>
      </div>
      <div className=" grid grid-cols-1 w-[150px] h-[300px] absolute right-[290px] top-6 font-mono font-bold gap-2">
        <div className=" bg-blue-400 border-2 flex justify-between items-center text-xl pl-2 pr-4">
          <span>HP:</span>
          <span>{pokemon.stats[0].base_stat}</span>
        </div>
        <div className=" bg-blue-400 border-2 flex justify-between items-center text-xl pl-2 pr-4">
          <span>ATK:</span>
          <span>{pokemon.stats[1].base_stat}</span>
        </div>
        <div className=" bg-blue-400 border-2 flex justify-between items-center text-xl pl-2 pr-4">
          <span>SPATK:</span>
          <span>{pokemon.stats[2].base_stat}</span>
        </div>
        <div className=" bg-blue-400 border-2 flex justify-between items-center text-xl pl-2 pr-4">
          <span>DEF:</span>
          <span>{pokemon.stats[3].base_stat}</span>
        </div>
        <div className=" bg-blue-400 border-2 flex justify-between items-center text-xl pl-2 pr-4">
          <span>SPDEF:</span>
          <span>{pokemon.stats[4].base_stat}</span>
        </div>
        <div className=" bg-blue-400 border-2 flex justify-between items-center text-xl pl-2 pr-4">
          <span>SPEED:</span>
          <span>{pokemon.stats[5].base_stat}</span>
        </div>
      </div>
      <div className="bg-black border-2 font-mono font-bold overflow-hidden h-[200px] w-[390px] absolute bottom-5 right-10 p-2 text-white">
        <h1 className=" text-xl">DESCRIPTION:</h1>
        <p className="mt-1">{getDescription()}</p>
      </div>
    </div>
  );
}
