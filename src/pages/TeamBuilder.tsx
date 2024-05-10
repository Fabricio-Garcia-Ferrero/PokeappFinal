import { useState } from "react";
import { Topbar } from "../components/Topbar";
import Lupa from "../assets/lupa.png"
import { MdDelete } from "react-icons/md";
import { IPokemon, ITipo } from "../components/Interfaces";
import axios from "axios";
import { calcular } from "../components/Calcular";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";

export function TeamBuilder() {

    const [pokemonName1, setPokemonName1] = useState<string>("")
    const [pokemonName2, setPokemonName2] = useState<string>("")
    const [pokemonName3, setPokemonName3] = useState<string>("")
    const [pokemonName4, setPokemonName4] = useState<string>("")
    const [pokemonName5, setPokemonName5] = useState<string>("")
    const [pokemonName6, setPokemonName6] = useState<string>("")

    const [pokemon1, setPokemon1] = useState<IPokemon | null>(null)
    const [pokemon2, setPokemon2] = useState<IPokemon | null>(null)
    const [pokemon3, setPokemon3] = useState<IPokemon | null>(null)
    const [pokemon4, setPokemon4] = useState<IPokemon | null>(null)
    const [pokemon5, setPokemon5] = useState<IPokemon | null>(null)
    const [pokemon6, setPokemon6] = useState<IPokemon | null>(null)

    const [hideResult, setHideResult] = useState<boolean>(true);

    const getPokemon = (e: number, nombre: string) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${nombre.toLowerCase()}`)
            .then(res => {
                getPokemonById(res.data.id, e)
            })
    }

    const getPokemonById = (id: number, e: number) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                res => {
                    switch (e) {
                        case 1: setPokemon1(res.data); break;
                        case 2: setPokemon2(res.data); break;
                        case 3: setPokemon3(res.data); break;
                        case 4: setPokemon4(res.data); break;
                        case 5: setPokemon5(res.data); break;
                        case 6: setPokemon6(res.data); break;
                    }
                })
    }
    const [deb, setDeb] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    const tipos: string[] = [
        "Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel",
        "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"
    ]

    const analizeTeam = () => {
        const newDeb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        setDeb(newDeb);

        const pokemonsValidos = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6].filter(pokemonData => pokemonData !== null);

        if (pokemonsValidos.length === 0) {
            alert("There are no valid Pokémon to analyze.");
            setDeb([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
            return;
        }

        setHideResult(!hideResult)

        pokemonsValidos.forEach(pokemonData => {
            let resultados: ITipo<number> | void | null = null

            if (!!pokemonData && pokemonData?.types.length > 1) {
                resultados = calcular(pokemonData?.types[0].type.name, pokemonData?.types[1].type.name);
            } else {
                resultados = calcular(pokemonData?.types[0].type.name, "Ninguno");
            }

            if (resultados) {
                Object.values(resultados).forEach((valor, indice) => {
                    if (valor < 1) {
                        newDeb[indice]++;
                    } else if (valor > 1) {
                        newDeb[indice]--;
                    }
                });
                setDeb(newDeb);
            }
        });
    }

    const changeToAnalize = () => {
        if (hideResult) {
            analizeTeam()
        } else {
            setHideResult(!hideResult)
        }
    }

    return (
        <div className="bg-gray-400 w-screen h-screen items-center">
            <Topbar />
            <div className="flex justify-center">
                <div className="w-[250px] h-[500px] my-auto mr-3 flex flex-col justify-center items-start">
                    <div className="w-[240px] h-[240px] bg-blue-600 rounded-full outline outline-blue-900 outline-8 flex justify-center items-center">
                        <p className="text-blue-950 text-9xl font-mono font-bold select-none">A</p>
                    </div>
                </div>
                <div className="bg-slate-600 min-h-min h-[600px] min-w-min w-[900px] mt-9 drop-shadow-sm rounded-xl grid grid-rows-8">
                    <div className="w-[880px] h-[560px] mx-5 my-5 bg-gradient-to-r from-lime-500 to-lime-600 rounded-xl border-black border-2 relative font-mono font-bold text-lime-950 flex flex-col">
                        {hideResult ? <div className="w-[830px] h-[470px] mx-auto my-1 grid grid-cols-3 grid-rows-2 gap-1 animate-fade animate-ease animate-delay-100">
                            <div className="flex flex-col p-1 border-b-2 border-lime-900 border-2 items-center bg-lime-300 rounded-2xl">
                                <div className="flex justify-evenly">
                                    <input onChange={(e) => setPokemonName1(e.target.value)} className="bg-lime-200 p-1 rounded-full border-lime-900 border-2" placeholder="Insert pokémon name"></input>
                                    <button onClick={() => getPokemon(1, pokemonName1)}><img className="w-6 h-6 hover:scale-125" src={Lupa} alt="Lens" /></button>
                                    <button onClick={() => setPokemon1(null)}><MdDelete className="w-6 h-6 hover:scale-125" /></button>
                                </div>
                                {!!pokemon1 ? <img className="w-[190px] h-[190px] mt-1" src={pokemon1?.sprites.front_default} alt="Pokémon 1" /> : null}
                            </div>
                            <div className="flex flex-col p-1 border-b-2 border-lime-900 border-2 bg-lime-300 rounded-2xl shadow-sm shadow-lime-950">
                                <div className="flex justify-evenly">
                                    <input onChange={(e) => setPokemonName2(e.target.value)} className="bg-lime-200 p-1 rounded-full border-lime-900 border-2" placeholder="Insert pokémon name"></input>
                                    <button onClick={() => getPokemon(2, pokemonName2)}><img className="w-6 h-6 hover:scale-125" src={Lupa} alt="Lens" /></button>
                                    <button onClick={() => setPokemon2(null)}><MdDelete className="w-6 h-6 hover:scale-125" /></button>
                                </div>
                                {!!pokemon2 ? <img className="w-[190px] h-[190px] mt-1" src={pokemon2?.sprites.front_default} alt="Pokémon 2" /> : null}
                            </div>
                            <div className="flex flex-col p-1 border-b-2 border-lime-900 border-2 bg-lime-300 rounded-2xl shadow-sm shadow-lime-950">
                                <div className="flex justify-evenly">
                                    <input onChange={(e) => setPokemonName3(e.target.value)} className="bg-lime-200 p-1 rounded-full border-lime-900 border-2" placeholder="Insert pokémon name"></input>
                                    <button onClick={() => getPokemon(3, pokemonName3)}><img className="w-6 h-6 hover:scale-125" src={Lupa} alt="Lens" /></button>
                                    <button onClick={() => setPokemon3(null)}><MdDelete className="w-6 h-6 hover:scale-125" /></button>
                                </div>
                                {!!pokemon3 ? <img className="w-[190px] h-[190px] mt-1" src={pokemon3?.sprites.front_default} alt="Pokémon 3" /> : null}
                            </div>
                            <div className="flex flex-col p-1 border-t-2 border-lime-900 border-2 bg-lime-300 rounded-2xl shadow-sm shadow-lime-950">
                                <div className="flex justify-evenly">
                                    <input onChange={(e) => setPokemonName4(e.target.value)} className="bg-lime-200 p-1 rounded-full border-lime-900 border-2" placeholder="Insert pokémon name"></input>
                                    <button onClick={() => getPokemon(4, pokemonName4)}><img className="w-6 h-6 hover:scale-125" src={Lupa} alt="Lens" /></button>
                                    <button onClick={() => setPokemon4(null)}><MdDelete className="w-6 h-6 hover:scale-125 " /></button>
                                </div>
                                {!!pokemon4 ? <img className="w-[190px] h-[190px] mt-1" src={pokemon4?.sprites.front_default} alt="Pokémon 4" /> : null}
                            </div>
                            <div className="flex flex-col p-1 border-t-2 border-lime-900 border-2 bg-lime-300 rounded-2xl shadow-sm shadow-lime-950">
                                <div className="flex justify-evenly">
                                    <input onChange={(e) => setPokemonName5(e.target.value)} className="bg-lime-200 p-1 rounded-full border-lime-900 border-2" placeholder="Insert pokémon name"></input>
                                    <button onClick={() => getPokemon(5, pokemonName5)}><img className="w-6 h-6 hover:scale-125" src={Lupa} alt="Lens" /></button>
                                    <button onClick={() => setPokemon5(null)}><MdDelete className="w-6 h-6 hover:scale-125" /></button>
                                </div>
                                {!!pokemon5 ? <img className="w-[190px] h-[190px] mt-1" src={pokemon5?.sprites.front_default} alt="Pokémon 5" /> : null}
                            </div>
                            <div className="flex flex-col p-1 border-t-2 border-lime-900 border-2 bg-lime-300 rounded-2xl shadow-sm shadow-lime-950">
                                <div className="flex justify-evenly">
                                    <input onChange={(e) => setPokemonName6(e.target.value)} className="bg-lime-200 p-1 rounded-full border-lime-900 border-2" placeholder="Insert pokémon name"></input>
                                    <button onClick={() => getPokemon(6, pokemonName6)}><img className="w-6 h-6 hover:scale-125" src={Lupa} alt="Lens" /></button>
                                    <button onClick={() => setPokemon6(null)}><MdDelete className="w-6 h-6 hover:scale-125" /></button>
                                </div>
                                {!!pokemon6 ? <img className="w-[190px] h-[190px] mt-1" src={pokemon6?.sprites.front_default} alt="Pokémon 6" /> : null}
                            </div>
                        </div>
                            :
                            <div className="w-[830px] h-[470px] mx-auto my-1 grid grid-cols-3 gap-1 bg-lime-300 rounded-2xl border-lime-950 border-2">
                                {deb.map((debilidad, i) => (
                                    <div key={i} className="bg-lime-200 grid grid-cols-5 items-center rounded-full h-10 w-44 border-lime-950 border-2 m-auto shadow-sm shadow-lime-950">
                                        <div className=" flex justify-end">
                                            {debilidad <= -3 && debilidad > -6 ? <TbAlertTriangleFilled /> : ''}
                                            {debilidad === -6 ? <TbAlertOctagonFilled /> : ''}
                                            {debilidad >= 3 && debilidad < 6 ? <FaCheck /> : ''}
                                            {debilidad === 6 ? <FaCheckDouble /> : ''}
                                        </div>
                                        <div className="col-span-4 flex justify-start">
                                            <img src={`/${i}.png`} alt={`Type ${tipos[i]}`} className=" w-5 h-5 mx-1" />{tipos[i]} {debilidad}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                        <button onClick={changeToAnalize} className="bg-lime-200 p-2 rounded-full mt-5 mx-auto w-[200px] border-lime-950 border-2 shadow-sm shadow-lime-950 active:scale-90 transition-transform duration-100 animate-fade animate-ease animate-delay-100">
                            {hideResult ? 'ANALYZE' : 'GO BACK'}
                        </button>
                    </div>
                </div>
                <div className="w-[250px] h-[500px] my-auto ml-3 flex flex-col justify-center items-end">
                    <div className="w-[240px] h-[240px] bg-red-600 rounded-full outline outline-red-900 outline-8 flex justify-center items-center">
                        <p className="text-red-950 text-9xl font-mono font-bold select-none">B</p>
                    </div>
                </div>

            </div>
        </div>
    )
}