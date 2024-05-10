import Red from "../assets/trainer_Red.png"

export function TrainersExplicacion() {
    return (
        <>
            <div className=" bg-lime-950 h-[450px] w-[400px] absolute left-[120px] bottom-[30px] animate-fade-down animate-ease-out animate-delay-300 " />
            <div className=" bg-lime-300 h-[450px] w-[400px] absolute left-[140px] bottom-[60px] z-30 animate-fade-down animate-ease-out animate-delay-300 p-4 font-mono border-4 border-lime-950">
                <div className="animate-fade animate-delay-1000 animate-ease-out select-none">
                    <h1 className="font-mono font-bold text-2xl text-lime-950">TRAINERS</h1>
                    <p>This section allows you to navigate between the different Pokémon trainers in the video game series.</p>
                    <br />
                    <p>On the left is a filter with drop-downs to filter by region, generation or rank, that is, gym leaders, elite four or champions.</p>
                    <br />
                    <p>On the right is a screen that shows a picture of the trainer, with his or her pokémon team, as well as other information. There are trainers that appear several times because their pokémon team changes depending on the game, generation and other variables.</p>
                </div>
            </div>
            <div  className="w-[280px] h-[560px] z-50 absolute top-1 right-32 animate-fade-left animate-ease-out animate-delay-300">
                <img src={Red} alt="Trainer Red"/>
            </div>
        </>
    )
}