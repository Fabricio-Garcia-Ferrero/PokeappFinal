import { useEffect, useState } from "react";
import { Topbar } from "../components/Topbar";
import axios from "axios";
import { IPokedex, IPokemon } from "../components/Interfaces";
import Lupa from "../assets/lupa.png"
import { PokedexComponent } from "../components/PokedexComponent";
import ButtonSound from "../assets/click-button-sound.mp3";

export function Pokedex() {

    const [pokemonUrls, setPokemonUrls] = useState<IPokedex[]>([])
    const [pokemons, setPokemons] = useState<IPokemon[]>([])

    const [pokemon, setPokemon] = useState<IPokemon>()
    const [hidePkx, setHidePkx] = useState(true)

    const [offset, setOffset] = useState<number>(0)
    const maxOffset:number = parseInt((pokemonUrls.length / 15).toFixed())

    const [totalPages, setTotalPage] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const pageSize = 15

    function playButtonSound() {
        new Audio(ButtonSound).play();
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0`)
            .then((response: any) => {
                setPokemonUrls(response.data.results)
                setTotalPage(Math.ceil(response.data.results.length / pageSize))
                getPokemon()
            })
    }, [pokemonUrls.length === 0])

    const getPokemon = () => {
        Promise.all(
            pokemonUrls.slice(offset, offset + 15).map((item: any) => {
                return axios.get(item.url)
                    .then(res =>
                        setPokemons((prev: any[]) => [...prev, res.data])
                    )
                    .catch(err => console.log(err));
            })
        );
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
            setOffset(offset + 15)
            setCurrentPage(currentPage + 1)
        }else{
            setOffset(0)
            setCurrentPage(1)
        }
        playButtonSound()
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setOffset(offset - 15)
            setCurrentPage(currentPage - 1)
        }else{
            setOffset(maxOffset * 15)
            setCurrentPage(totalPages)
        }
        playButtonSound()
    }

    useEffect(() => {
        setPokemons([])
        getPokemon()
    }, [offset, setOffset])

    const showPokedex = (id: number) => {
        setHidePkx(!hidePkx)
        setPokemon(pokemons[id - 15 * (currentPage - 1) - 1])
    }

    function toTittle(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return (
        <div className="bg-gray-400 w-screen h-screen items-center">
            <Topbar />
            {hidePkx &&
                <div className="flex justify-center">
                    <button onClick={prevPage}>
                        <div className="w-[250px] h-[500px] my-auto mr-3 flex flex-col justify-center items-start ">
                            <div className="w-[240px] h-[240px] bg-blue-600 rounded-full outline outline-blue-900 outline-8 flex justify-center items-center active:scale-90 transition-transform duration-100">
                                <p className=" text-blue-950 text-9xl font-mono font-bold select-none ">A</p>
                            </div>
                        </div>
                    </button>
                    <div className="bg-slate-600 min-h-min h-[600px] min-w-min w-[900px] mt-9 drop-shadow-sm rounded-xl grid grid-rows-8">
                        <div className="w-[880px] h-[560px] mx-5 my-5 bg-gradient-to-r from-lime-500 to-lime-600 rounded-xl border-black border-2 relative font-mono font-bold text-lime-950">
                            <div className="grid grid-cols-5 text-center items-center mt-2 bg-lime-300 mx-5 border-lime-950 border-2">
                                <h1 className="underline text-xl">ID</h1>
                                <h1 className="underline text-xl">NAME</h1>
                                <h1 className="underline text-xl">PRIMARY TYPE</h1>
                                <h1 className="underline text-xl">SECONDARY TYPE</h1>
                                <h1 className="underline text-xl">POKÉDEX</h1>
                            </div>
                            <div className="row-span-7 flex flex-col p-2">
                                {pokemons.sort((a, b) => a.id - b.id).map((pokemon) => (
                                    <div className="grid grid-cols-5 text-center mb-2 border border-1 border-black rounded-lg bg-lime-300 shadow-sm shadow-lime-950 animate-fade animate-ease animate-delay-50">
                                        <p>{pokemon.id}</p>
                                        <p>{toTittle(pokemon.name)}</p>
                                        {pokemon.types.map(type => <p>{toTittle(type.type.name)}</p>)}
                                        {pokemon.types.length === 1 && <div />}
                                        <button className="place-self-center" onClick={() => showPokedex(pokemon.id)}><img src={Lupa} alt="Lens" className="w-[20px] h-[20px] hover:scale-125" /></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button onClick={nextPage}>
                        <div className=" w-[250px] h-[500px] my-auto ml-3 flex flex-col justify-center items-end">
                            <div className=" w-[240px] h-[240px] bg-red-600 rounded-full outline outline-red-900 outline-8 flex justify-center items-center active:scale-90  transition-transform duration-100 ">
                                <p className=" text-red-950 text-9xl font-mono font-bold select-none">B</p>
                            </div>
                        </div>
                    </button>
                </div>}

            {!hidePkx && pokemon !== undefined &&
                <div className="relative flex flex-col items-center">
                    <PokedexComponent pokemon={pokemon} onClick={() => setHidePkx(!hidePkx)}/>
                </div>
            }
        </div>
    )
}