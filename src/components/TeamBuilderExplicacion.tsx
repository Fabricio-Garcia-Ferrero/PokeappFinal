import pikachu from "../assets/iconPikachu.png"
import bulbasaur from "../assets/iconBulbasaur.png"
import charmander from "../assets/iconCharmander.png"
import squirtle from "../assets/iconSquirtle.png"

export function TeamBuilderExplicacion() {
    return (
        <>
            <div className=" bg-lime-950 h-[450px] w-[400px] absolute left-[120px] bottom-[30px] animate-fade-down animate-ease-out animate-delay-300 " />
            <div className=" bg-lime-300 h-[450px] w-[400px] absolute left-[140px] bottom-[60px] z-30 animate-fade-down animate-ease-out animate-delay-300 p-4 font-mono border-4 border-lime-950">
                <div className="animate-fade animate-delay-1000 animate-ease-out select-none">
                    <h1 className="font-mono font-bold text-2xl text-lime-950">TEAM BUILDER</h1>
                    <p>This section allows you to analyze the weaknesses of your Pokémon team</p>
                    <br />
                    <p>To do this, search for at least one Pokémon in one of the six slots by filling in the name field. If a Pokémon with that name exists, its sprite will appear</p>
                    <br />
                    <p>Then click on the analyze button, and</p>
                    <p>it will show you a screen with all</p>
                    <p>the Pokémon types, and a number indicating the team's resistance to</p>
                    <p>that element. The larger or smaller the number, the more resistant or weak respectively the team is</p>
                </div>
            </div>
            <img src={pikachu} alt="Pikachu icon" className="absolute right-5 top-32 w-[200px] h-[200px] z-50 animate-fade-left animate-ease-out animate-delay-300" />
            <img src={bulbasaur} alt="Bulbasaur icon" className="absolute right-40 top-7 w-[200px] h-[200px] z-50 animate-fade-left animate-ease-out animate-delay-300" />
            <img src={charmander} alt="Charmander icon" className="absolute right-5 top-[332px] w-[200px] h-[200px] z-50 animate-fade-left animate-ease-out animate-delay-300" />
            <img src={squirtle} alt="Squirtle icon" className="absolute right-40 top-[232px] w-[200px] h-[200px] z-50 animate-fade-left animate-ease-out animate-delay-300" />
            <div className="bg-lime-950 absolute right-40 top-[232px] w-[200px] h-[200px] z-30 animate-fade-left animate-ease-out animate-delay-300 rounded-full" />
            <div className="bg-lime-950 absolute right-5 top-[332px] w-[200px] h-[200px] z-30 animate-fade-left animate-ease-out animate-delay-300 rounded-full" />
            <div className="bg-lime-950 absolute right-40 top-7 w-[200px] h-[200px] z-30 animate-fade-left animate-ease-out animate-delay-300 rounded-full" />
            <div className="bg-lime-950 absolute right-5 top-32 w-[200px] h-[200px] z-30 animate-fade-left animate-ease-out animate-delay-300 rounded-full" />
        </>
    )
}