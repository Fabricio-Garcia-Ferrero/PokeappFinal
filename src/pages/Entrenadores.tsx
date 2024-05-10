import { Topbar } from "../components/Topbar";
import { useState } from "react";
import { TrainersMenu } from "../components/TrainersMenu";
import { BiCaretUp } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export function Entrenadores() {

    const [regionFilter, setRegionFilter] = useState<boolean>(false);
    const [generationFilter, setGenerationFilter] = useState<boolean>(false);
    const [rangeFilter, setRangeFilter] = useState<boolean>(false);
    const [gameFilter, setGameFilter] = useState<boolean>(false);

    const regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"]
    const generations = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    const ranges = ["Leaders", "Elite Four", "Champions"]
    const games = ["Red", "Blue", "Yellow", "Gold", "Silver", "Crystal", "Ruby", "Sapphire", "Emerald", "Diamond", "Pearl", "Platinum", "Black", "White", "Black 2", "White 2", "X", "Y", "Sun", "Moon", "Ultra Sun", "Ultra Moon", "Sword", "Shield", "Purple", "Scarlet"]

    const [pageState, setPageState] = useState<string>("All");

    return (
        <div className="bg-gray-400 w-screen h-screen items-center">
            <Topbar />
            <div className="flex justify-center">
                <div className="w-[250px] h-[500px] my-auto mr-3 flex flex-col justify-center items-start ">
                    <div className="w-[240px] h-[240px] bg-blue-600 rounded-full outline outline-blue-900 outline-8 flex justify-center items-center">
                        <p className=" text-blue-950 text-9xl font-mono font-bold select-none ">A</p>
                    </div>
                </div>
                <div className="bg-slate-600 min-h-min h-[600px] min-w-min w-[900px] mt-9 drop-shadow-sm rounded-xl grid grid-rows-8">
                    <div className="w-[880px] h-[560px] mx-5 my-5 bg-gradient-to-r from-lime-500 to-lime-600 rounded-xl border-black border-2 relative font-mono font-bold text-lime-950">
                        <div className="bg-lime-200 absolute top-7 left-7 h-[475px] w-[215px] flex flex-col overflow-auto border-4 border-lime-900 shadow-sm shadow-lime-900">
                            <div className="bg-lime-200 w-full h-10 flex justify-center items-center border-b-4 border-lime-900">
                                <span className="text-2xl text-lime-900">FILTER</span>
                            </div>
                            <button onClick={() => setPageState("All")}>
                                <div className="bg-lime-200 w-full h-10 flex justify-between items-center px-2 border-b-4 border-lime-900">
                                    <span className="text-xl">ALL</span>
                                </div>
                            </button>
                            <div className="bg-lime-200 w-full h-10 flex justify-between items-center px-2 border-b-4 border-lime-900">
                                <span className="text-xl">GAME</span>
                                <button onClick={() => setGameFilter(!gameFilter)}>{gameFilter ? <BiCaretUp /> : <BiCaretDown />}</button>
                            </div>
                            {gameFilter &&
                                <div className="bg-lime-200 flex flex-col items-start border-b-4 border-lime-900">
                                    {games.map((game) => (
                                        <button key={game} onClick={() => setPageState(game)}>
                                            <span className="mx-2">{game}</span>
                                        </button>
                                    ))}
                                </div>
                            }
                            <div className="bg-lime-200 w-full h-10 flex justify-between items-center px-2 border-b-4 border-lime-900">
                                <span className="text-xl">REGION</span>
                                <button onClick={() => setRegionFilter(!regionFilter)}>{regionFilter ? <BiCaretUp /> : <BiCaretDown />}</button>
                            </div>
                            {regionFilter &&
                                <div className="bg-lime-200 flex flex-col items-start border-b-4 border-lime-900">
                                    {regions.map((region) => (
                                        <button key={region} onClick={() => setPageState(region)}>
                                            <span className="mx-2">{region}</span>
                                        </button>
                                    ))}
                                </div>
                            }
                            <div className="bg-lime-200 w-full h-10 flex justify-between items-center px-2 border-b-4 border-lime-900">
                                <span className="text-xl">GENERATION</span>
                                <button onClick={() => setGenerationFilter(!generationFilter)}>{generationFilter ? <BiCaretUp /> : <BiCaretDown />}</button>
                            </div>
                            {generationFilter &&
                                <div className="bg-lime-200 flex flex-col items-start border-b-4 border-lime-900">
                                    {generations.map((gen) => (
                                        <button key={gen} onClick={() => setPageState(gen)}>
                                            <span className="mx-2">{gen}</span>
                                        </button>
                                    ))}
                                </div>
                            }
                            <div className="bg-lime-200 w-full h-10 flex justify-between items-center px-2 border-b-4 border-lime-900">
                                <span className="text-xl">RANGE</span>
                                <button onClick={() => setRangeFilter(!rangeFilter)}>{rangeFilter ? <BiCaretUp /> : <BiCaretDown />}</button>
                            </div>
                            {rangeFilter &&
                                <div className="bg-lime-200 flex flex-col items-start">
                                    {ranges.map((range) => (
                                        <button key={range} onClick={() => setPageState(range)}>
                                            <span className="mx-2">{range}</span>
                                        </button>
                                    ))}
                                </div>
                            }
                        </div>
                        <TrainersMenu page={pageState} />
                    </div>
                </div>
                <div className=" w-[250px] h-[500px] my-auto ml-3 flex flex-col justify-center items-end">
                    <div className=" w-[240px] h-[240px] bg-red-600 rounded-full outline outline-red-900 outline-8 flex justify-center items-center">
                        <p className=" text-red-950 text-9xl font-mono font-bold select-none">B</p>
                    </div>
                </div>
            </div>
        </div>
    )
}