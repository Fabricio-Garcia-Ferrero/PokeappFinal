import { Presentacion } from "./Presentacion";
import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import { PokedexExplicacion } from "./PokedexExplicacion";
import { FavoritosExplicacion } from "./FavoritosExplicacion";
import { TeamBuilderExplicacion } from "./TeamBuilderExplicacion";
import { TrainersExplicacion } from "./TrainersExplicacion";

function SwitchComponents({ active, children } : {active: string, children: ReactElement[]}) : ReactElement 
{ 
    return children.filter((child: ReactElement) => child.key === active)[0]; 
}

const PantallaInicial = React.forwardRef((props, ref) => {
    const [activeElement, setActiveElemente] = useState<string>("presentacion");
    const [componentIndex, setComponentIndex] = useState<number>(0);
    const components = ["presentacion", "pokedex", "favoritos", "teambuilder", "trainers"];

    const changeIndex = ({ type }: { type: string }) => {
        if (type === "A") {
            if (componentIndex === 0) {
                setComponentIndex(components.length-1);
            } else {
                setComponentIndex(componentIndex - 1);
            }
        } else if (type === "B") {
            if (componentIndex === components.length-1) {
                setComponentIndex(0);
            } else {
                setComponentIndex(componentIndex + 1);
            }
        } else {
            return;
        }
    };

    useEffect(() => {
        setActiveElemente(components[componentIndex]);
    }, [componentIndex]);

    React.useImperativeHandle(ref, () => ({
        changeIndex,
    }));

    return (
        <div className="bg-slate-600 min-h-min h-[600px] min-w-min w-[900px] mt-9 drop-shadow-sm rounded-xl flex flex-col">
            <div className="w-[880px] h-[560px] mx-5 my-5 bg-gradient-to-r from-lime-500 to-lime-600 rounded-xl border-black border-2 relative ">
                <SwitchComponents
                    active={activeElement}
                    children={[
                        <Presentacion key={"presentacion"} />,
                        <PokedexExplicacion key={"pokedex"} />,
                        <FavoritosExplicacion key={"favoritos"} />,
                        <TeamBuilderExplicacion key={"teambuilder"} />,
                        <TrainersExplicacion key={"trainers"} />
                    ]}
                />
            </div>
        </div>
    );
});
export default PantallaInicial;