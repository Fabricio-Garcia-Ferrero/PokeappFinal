import { useRef } from "react";
import PantallaInicial from "../components/PantallaInicial";
import { Topbar } from "../components/Topbar";
import ButtonSound from '../assets/click-button-sound.mp3'


export function Home() {

    const childRef = useRef<any>(null);

    function playButtonSound() {
        new Audio(ButtonSound).play();
    }

    const handleChangeMenu = ({ typeButton }: { typeButton: string }) => {
        childRef.current.changeIndex({ type: typeButton })
        playButtonSound()
    }

    return (
        <div className="bg-gray-400 w-screen h-screen items-center">
            <Topbar />
            <div className=" flex justify-center">
                <button onClick={() => handleChangeMenu({ typeButton: "A" })}>
                    <div className=" w-[250px] h-[500px] my-auto mr-3 flex flex-col justify-center items-start ">
                        <div className=" w-[240px] h-[240px] bg-blue-600 rounded-full outline outline-blue-900 outline-8 flex justify-center items-center active:scale-90 transition-transform duration-100 ">
                            <p className=" text-blue-950 text-9xl font-mono font-bold select-none ">A</p>
                        </div>
                    </div>
                </button>
                <PantallaInicial ref={childRef} />
                <button onClick={() => handleChangeMenu({ typeButton: "B" })}>
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