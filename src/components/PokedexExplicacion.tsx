import Lupa from '../assets/lupa.png'

export function PokedexExplicacion() {
    return (
        <>
            <div className=" bg-lime-950 h-[450px] w-[400px] absolute left-[120px] bottom-[30px] animate-fade-down animate-ease-out animate-delay-300 " />
            <div className=" bg-lime-300 h-[450px] w-[400px] absolute left-[140px] bottom-[60px] z-30 animate-fade-down animate-ease-out animate-delay-300 p-4 font-mono border-4 border-lime-950">
                <div className="animate-fade animate-delay-1000 animate-ease-out select-none">
                    <h1 className="font-mono font-bold text-2xl text-lime-950">POKÉDEX</h1>
                    <p>The Pokédex section has two main functions:</p>
                    <br />
                    <p>A Pokémon search feature,</p>
                    <p>using <strong>A</strong> and <strong>B</strong> you can navigate</p>
                    <p>through all the current Pokémon</p>
                    <p>which are displayed in a table</p>
                    <br />
                    <p>Within each table, there is</p>
                    <p>a lens-shaped button that when</p>
                    <p> clicked opens a screen with </p>
                    <p>all the Pokémon's data</p>
                </div>
            </div>
            <div className=" absolute right-[50px] top-[100px] rotate-12 w-[400px] h-[400px] z-30 animate-fade-left animate-ease-out animate-delay-300">
                <img src={Lupa} alt='Lens icon' />
            </div>
        </>
    )
}