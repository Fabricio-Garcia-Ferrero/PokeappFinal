import pikachu from "../assets/pikachu.png"
import star from "../assets/star.png"

export function FavoritosExplicacion() {
    return (
        <>
            <div className=" bg-lime-950 h-[450px] w-[400px] absolute left-[120px] bottom-[30px] animate-fade-down animate-ease-out animate-delay-300 " />
            <div className=" bg-lime-300 h-[450px] w-[400px] absolute left-[140px] bottom-[60px] z-30 animate-fade-down animate-ease-out animate-delay-300 p-4 font-mono border-4 border-lime-950">
                <div className="animate-fade animate-delay-1000 animate-ease-out select-none">
                    <h1 className="font-mono font-bold text-2xl text-lime-950">FAVOURITES</h1>
                    <p>In this section, you can view</p>
                    <p>your favorite Pokémon. To do this, <p>in the Pokédex section, each time</p> a Pokémon is searched and the information screen is opened, it</p>
                    <p>has a heart-shaped button,</p>
                    <p>clicking on it will add the Pokémon</p>
                    <p>to favorites</p>
                    <br />
                    <p>To remove, within favorites,</p> 
                    <p>next to the name of each Pokémon,</p>
                    <p>there is a trash can symbol that</p>
                    <p>will remove it and update the list</p>
                </div>
            </div>
            <img src={pikachu} alt="Pikachu pixelart" className="absolute right-0 top-20 w-[450px] h-[450px] z-30 animate-fade-left animate-ease-out animate-delay-300" />
            <img src={star} alt="Star pixelart" className="absolute right-24 top-16 z-50 w-[80px] h-[80px] animate-fade-left animate-ease-out animate-delay-300" />
        </>
    )
}