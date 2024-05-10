import Logo from '../assets/Logo.png'

export function Presentacion() {
    return (
        <>
            <div className=" w-[400px] h-[400px] absolute right-1 bottom-20 top-20 z-50 animate-fade-left animate-ease-out animate-delay-300 select-none ">
                <img src={Logo} alt="Logo of the app" />
            </div>
            <div className=" w-[340px] h-[330px] rounded-full absolute right-16 top-32 z-30 bg-lime-950 animate-fade-left animate-ease-out animate-delay-300 " />
            <div className=" bg-lime-950 h-[450px] w-[400px] absolute left-[20px] bottom-[30px] animate-fade-down animate-ease-out animate-delay-300 " />
            <div className=" bg-lime-300 h-[450px] w-[400px] absolute left-[50px] bottom-[60px] z-30 animate-fade-down animate-ease-out animate-delay-300 p-4 font-mono border-4 border-lime-950">
                <div className="animate-fade animate-delay-1000 animate-ease-out select-none">
                    <h1 className="font-mono font-bold text-2xl text-lime-950">POKEAPP</h1>
                    <p>Web application created by Fabricio García Ferrero, 2nd year DAM students</p>
                    <br />
                    <p>The application uses the technologies learned during the internship at the company:</p>
                    <ul>
                        <li>
                            &rarr; <strong>React & Vite</strong>: for the frontend
                        </li>
                        <li>
                            &rarr; <strong>Typescript</strong>: as the language
                        </li>
                        <li>
                            &rarr; <strong>Tailwind</strong>: for styling
                        </li>
                        <li>
                            &rarr; <strong>Axios</strong>: as the HTTP library
                        </li>
                        <li>
                            &rarr; <strong>POKEAPI</strong>: as the API
                        </li>
                        <li>
                            &rarr; <strong>Firebase</strong>: as an auxiliary database
                        </li>
                    </ul>
                    <br />
                    <p>Press <strong>A</strong> or <strong>B</strong> to navigate between explanatory menus</p>
                </div>
            </div>
        </>
    )
}