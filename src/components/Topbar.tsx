import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

export function Topbar(){
    return(
        <div className=" grid grid-cols-7 min-w-[1200px] h-20 bg-red-600 shadow-md shadow-slate-800">
            <div className="flex">
                <h1 className=" text-5xl font-bold font-mono text-white m-auto pl-3">POKEAPP</h1>
            </div>
            <div className=" col-span-5 flex justify-evenly place-items-center">
                <Link to='/'><button className=" bg-red-200 font-mono rounded-full p-3 w-32 shadow-md shadow-red-900 text-lg hover:scale-110 transition-transform duration:200 hover:bg-red-950 hover:text-white ">HOME</button></Link>
                <Link to='/pokedex'><button className=" bg-red-200 font-mono rounded-full p-3 w-32 shadow-md shadow-red-900 text-lg hover:scale-110 transition-transform duration:200 hover:bg-red-950 hover:text-white ">POKÉDEX</button></Link>
                <Link to='/favoritos'><button className=" bg-red-200 font-mono rounded-full p-3 w-32 shadow-md shadow-red-900 text-lg hover:scale-110 transition-transform duration:200 hover:bg-red-950 hover:text-white ">FAVOURITES</button></Link>
                <Link to='/teambuilder'><button className=" bg-red-200 font-mono rounded-full p-3 w-36 shadow-md shadow-red-900 text-lg hover:scale-110 transition-transform duration:200 hover:bg-red-950 hover:text-white ">TEAM BUILDER</button></Link>
                <Link to='/trainers'><button className=" bg-red-200 font-mono rounded-full p-3 w-36 shadow-md shadow-red-900 text-lg hover:scale-110 transition-transform duration:200 hover:bg-red-950 hover:text-white ">TRAINERS</button></Link>
            </div>
            <div className=" flex justify-center items-center">
                <img className=" h-16 w-16 " src={Logo} alt="Logo of the app"/>
            </div>
        </div>
    )
}