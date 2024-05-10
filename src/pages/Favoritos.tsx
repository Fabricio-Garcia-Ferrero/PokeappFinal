import { useEffect, useState } from "react"
import { Topbar } from "../components/Topbar"
import { getFavorite, delFavorite } from "../config/firebase"
import ButtonSound from "../assets/click-button-sound.mp3"
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { IPokemon } from "../components/Interfaces";


export function Favoritos() {

    const [pokemonFav, setPokemonFav] = useState<any[]>([]);
    const [filteredPokemon, setFilteredPokemon] = useState<any[]>([])
    const [totalPages, setTotalPage] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [actualizar, setActualizar] = useState<boolean>(true)
    const [pokemon, setPokemon] = useState<IPokemon>()

    const delPoke = (id: string) => {
        delFavorite(id)
        setActualizar(!actualizar)
    }

    useEffect(() => {
        const fetchData = async () => {
            const favorites = await getFavorite();
            setPokemonFav(favorites.sort((a, b) => a.id - b.id));
            if (favorites.length > 12) {
                setFilteredPokemon(favorites.slice(0, 12))
            } else {
                setFilteredPokemon(favorites)
            }
            setTotalPage(Math.ceil(favorites.length / 12));
        };
        fetchData();
    }, [actualizar]);

    const offset = 12

    const [change, setChange] = useState<boolean>(true)

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
            setFilteredPokemon([])
            setChange(!change)
        }
        playButtonSound()
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            setFilteredPokemon([])
            setChange(!change)
        }
        playButtonSound()
    }

    useEffect(() => {
        setFilteredPokemon(pokemonFav.slice((currentPage - 1) * offset, currentPage * offset))
    }, [change])

    function playButtonSound() {
        new Audio(ButtonSound).play();
    }

    const getPoke = (id: string) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => { setPokemon(response.data) })
    }

    function toTittle(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return (
        <div className="bg-gray-400 w-screen h-screen">
            <Topbar />
            <div className="flex justify-center">
                <button onClick={prevPage}>
                    <div className=" w-[250px] h-[500px] my-auto mr-3 flex flex-col justify-center items-start ">
                        <div className=" w-[240px] h-[240px] bg-blue-600 rounded-full outline outline-blue-900 outline-8 flex justify-center items-center active:scale-90 transition-transform duration-100 ">
                            <p className=" text-blue-950 text-9xl font-mono font-bold select-none ">A</p>
                        </div>
                    </div>
                </button>
                <div className="bg-slate-600 min-h-min h-[600px] min-w-min w-[900px] mt-9 drop-shadow-sm rounded-xl flex flex-col self-center">
                    <div className="w-[880px] h-[560px] mx-5 my-5 bg-gradient-to-r from-lime-500 to-lime-600 rounded-xl border-black border-2 relative grid grid-cols-4 grid-rows-3 gap-4 p-4 ">
                        {filteredPokemon.map((poke: any) => (
                            <div className="grid grid-cols-1 border-2 border-lime-950 bg-lime-200 overflow-hidden rounded-2xl shadow-sm shadow-lime-950 animate-fade animate-ease animate-delay-100">
                                <button className="place-self-center" onClick={() => getPoke(poke.id)}><img src={poke.sprite} alt="Pokémon sprite" className=" self-center place-self-center scale-125 hover:scale-150" /></button>
                                <div className="flex gap-2 w-full place-content-center">
                                    <p className=" place-self-center font-mono font-bold">#{poke.id} {toTittle(poke.name)}</p>
                                    <button onClick={() => delPoke(poke.id)} className=" hover:scale-150 transition-transform duration:100"><MdDelete /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={nextPage}>
                    <div className=" w-[250px] h-[500px] my-auto ml-3 flex flex-col justify-center items-end">
                        <div className=" w-[240px] h-[240px] bg-red-600 rounded-full outline outline-red-900 outline-8 flex justify-center items-center active:scale-90  transition-transform duration-100 ">
                            <p className=" text-red-950 text-9xl font-mono font-bold select-none">B</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}