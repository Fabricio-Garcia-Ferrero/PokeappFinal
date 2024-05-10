import { useEffect, useState } from "react";
import Trainers from "../Trainers/Trainers.json";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

interface TrainersMenuProps {
    page: string;
}

export function TrainersMenu({ page }: TrainersMenuProps) {

    const [change, setChange] = useState<boolean>(true)
    const [trainers, setTrainers] = useState<any>([{ id: '', name: '', range: '', generation: '', game: '', region: '', location: '', dependsOn: '', pokemon: [{ name: '', type1: '', type2: '' }, { name: '', type1: '', type2: '' }, { name: '', type1: '', type2: '' }, { name: '', type1: '', type2: '' }, { name: '', type1: '', type2: '' }, { name: '', type1: '', type2: '' }] }]);
    const regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"]
    const generations = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    const ranges = ["Leaders", "Elite Four", "Champions"]
    const games = ["Red", "Blue", "Yellow", "Gold", "Silver", "Crystal", "Ruby", "Sapphire", "Emerald", "Diamond", "Pearl", "Platinum", "Black", "White", "Black 2", "White 2", "X", "Y", "Sun", "Moon", "Ultra Sun", "Ultra Moon", "Sword", "Shield", "Purple", "Scarlet"]

    const [trainersIndex, setTrainersIndex] = useState<number>(0);

    const getAllTrainers = () => {
        const filterdTrainers: any = [];
        Trainers.leaders.map((leader: any) => {
                filterdTrainers.push(leader);
        })
        Trainers.elite_four.map((elite: any) => {
                filterdTrainers.push(elite);
        })
        Trainers.champion.map((champion: any) => {
                filterdTrainers.push(champion);
        })
        setTrainers(filterdTrainers)
        setTrainersIndex(0)
        setChange(false)
    }

    const getByRegion = (region: string) => {
        const filterdTrainers: any = [];
        Trainers.leaders.map((leader: any) => {
            if (leader.region === region) {
                filterdTrainers.push(leader);
            }
        })
        Trainers.elite_four.map((elite: any) => {
            if (elite.region === region) {
                filterdTrainers.push(elite);
            }
        })
        Trainers.champion.map((champion: any) => {
            if (champion.region === region) {
                filterdTrainers.push(champion);
            }
        })
        setTrainers(filterdTrainers)
        setTrainersIndex(0)
        setChange(false)
    }

    const getByGeneration = (generation: string) => {
        const filterdTrainers: any = [];
        Trainers.leaders.map((leader: any) => {
            if (leader.generation === generation) {
                filterdTrainers.push(leader);
            }
        })
        Trainers.elite_four.map((elite: any) => {
            if (elite.generation === generation) {
                filterdTrainers.push(elite);
            }
        })
        Trainers.champion.map((champion: any) => {
            if (champion.generation === generation) {
                filterdTrainers.push(champion);
            }
        })
        setTrainers(filterdTrainers)
        setTrainersIndex(0)
        setChange(false)
    }

    const getByRange = (range: string) => {
        const filterdTrainers: any = [];
        if (range === 'Leaders') {
            Trainers.leaders.map((elite: any) => {
                filterdTrainers.push(elite);
            })
        }
        else if (range === 'Elite Four') {
            Trainers.elite_four.map((leader: any) => {
                filterdTrainers.push(leader);
            })
        }
        else if (range === 'Champions') {
            Trainers.champion.map((champion: any) => {
                filterdTrainers.push(champion);
            })
        }
        setTrainers(filterdTrainers)
        setTrainersIndex(0)
        setChange(false)
    }

    const getByGame = (game: string) => {
        const filterdTrainers: any = [];
        Trainers.leaders.map((leader: any) => {
            if (leader.game.split("-").includes(game)) {
                filterdTrainers.push(leader);
            }
        })
        Trainers.elite_four.map((elite: any) => {
            if (elite.game.split("-").includes(game)) {
                filterdTrainers.push(elite);
            }
        })
        Trainers.champion.map((champion: any) => {
            if (champion.game.split("-").includes(game)) {
                filterdTrainers.push(champion);
            }
        })
        setTrainers(filterdTrainers)
        setTrainersIndex(0)
        setChange(false)
    }

    useEffect(() => {
        if(page==="All"){
            getAllTrainers()
            return
        }else if (regions.includes(page)) {
            getByRegion(page)
            return
        } else if (generations.includes(page)) {
            getByGeneration(page)
            return
        } else if (ranges.includes(page)) {
            getByRange(page)
            return
        } else if (games.includes(page)) {
            getByGame(page)
            return
        }
        
    }, [page])

    const nextTrainer = () => {
        if (trainersIndex === trainers.length - 1) {
            setTrainersIndex(0);
        } else {
            setTrainersIndex(trainersIndex + 1);
        }
    };

    const prevTrainer = () => {
        if (trainersIndex === 0) {
            setTrainersIndex(trainers.length - 1);
        } else {
            setTrainersIndex(trainersIndex - 1);
        }
    };

    interface TrainerUrls {
        [key: string]: string;
    }

    const trainersUrls: TrainerUrls = {
        "Brock":"https://images.wikidexcdn.net/mwuploads/wikidex/3/3b/latest/20180812021535/Brock_LGPE.png",
        "Misty":"https://images.wikidexcdn.net/mwuploads/wikidex/f/fd/Misty_LGPE.png",
        "Lt. Surge":"https://images.wikidexcdn.net/mwuploads/wikidex/1/1c/latest/20180913001903/Teniente_Surge_LGPE.png",
        "Erika":"https://images.wikidexcdn.net/mwuploads/wikidex/1/1c/latest/20180912234902/Erika_LGPE.png",
        "Janine":"https://images.wikidexcdn.net/mwuploads/wikidex/c/c8/latest/20130708110816/Sachiko_en_HGSS.png",
        "Koga":"https://images.wikidexcdn.net/mwuploads/wikidex/9/9e/latest/20201001063422/Koga_LGPE.png",
        "Sabrina":"https://images.wikidexcdn.net/mwuploads/wikidex/a/a4/latest/20230714033825/Sabrina_LGPE.png",
        "Blaine":"https://images.wikidexcdn.net/mwuploads/wikidex/c/c5/latest/20181108184440/Blaine_LGPE.png",
        "Giovanni":"https://images.wikidexcdn.net/mwuploads/wikidex/0/0a/latest/20230923195112/Giovanni_LGPE.png",
        "Lorelei":"https://images.wikidexcdn.net/mwuploads/wikidex/6/6c/latest/20181107200756/Lorelei_LGPE.png",
        "Bruno":"https://images.wikidexcdn.net/mwuploads/wikidex/f/f3/latest/20181107201157/Bruno_LGPE.png",
        "Agatha":"https://images.wikidexcdn.net/mwuploads/wikidex/d/de/latest/20181107201556/Agatha_LGPE.png",
        "Lance":"https://images.wikidexcdn.net/mwuploads/wikidex/2/29/latest/20181107202000/Lance_LGPE.png",
        "Blue":"https://images.wikidexcdn.net/mwuploads/wikidex/9/9b/latest/20230923194222/Azul_LGPE.png",
        "Falkner":"https://images.wikidexcdn.net/mwuploads/wikidex/f/fd/latest/20200923025730/Pegaso_en_HGSS.png",
        "Bugsy":"https://images.wikidexcdn.net/mwuploads/wikidex/5/51/latest/20200923024946/Ant%C3%B3n_en_HGSS.png",
        "Whitney":"https://images.wikidexcdn.net/mwuploads/wikidex/8/87/latest/20200923030056/Blanca_en_HGSS.png",
        "Morty":"https://images.wikidexcdn.net/mwuploads/wikidex/4/4d/latest/20200923030425/Morti_en_HGSS.png",
        "Chuck":"https://images.wikidexcdn.net/mwuploads/wikidex/5/5f/latest/20200923023843/An%C3%ADbal_en_HGSS.png",
        "Jasmine":"https://images.wikidexcdn.net/mwuploads/wikidex/c/c8/latest/20200923030947/Yasmina_en_HGSS.png",
        "Pryce":"https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20200923031530/Fredo_en_HGSS.png",
        "Clair":"https://images.wikidexcdn.net/mwuploads/wikidex/5/53/latest/20200923023600/D%C3%A9bora_en_HGSS.png",
        "Will":"https://images.wikidexcdn.net/mwuploads/wikidex/4/46/latest/20141118014551/Mento_en_HGSS.png",
        "Karen":"https://images.wikidexcdn.net/mwuploads/wikidex/9/9a/latest/20141118014550/Karen_en_HGSS.png",
        "Roxanne":"https://images.wikidexcdn.net/mwuploads/wikidex/d/d6/latest/20140714144756/Petra_ROZA.png",
        "Brawly":"https://images.wikidexcdn.net/mwuploads/wikidex/5/54/latest/20140714160131/Marcial_ROZA.png",
        "Wattson":"https://images.wikidexcdn.net/mwuploads/wikidex/f/fd/latest/20140714155637/Erico_ROZA.png",
        "Flannery":"https://images.wikidexcdn.net/mwuploads/wikidex/7/70/latest/20140714145234/Candela_ROZA.png",
        "Norman":"https://images.wikidexcdn.net/mwuploads/wikidex/5/5c/latest/20140714163725/Norman_ROZA.png",
        "Winona":"https://images.wikidexcdn.net/mwuploads/wikidex/e/e9/latest/20150111171130/Alana_ROZA.png",
        "Tate & Liza":"https://images.wikidexcdn.net/mwuploads/wikidex/d/d5/latest/20230714034624/Vito_y_Leti_ROZA.png",
        "Wallace":"https://images.wikidexcdn.net/mwuploads/wikidex/f/fa/latest/20141113173729/Plubio_ROZA.png",
        "Juan":"https://images.wikidexcdn.net/mwuploads/wikidex/0/09/latest/20171215173931/Galano.png",
        "Sidney":"https://images.wikidexcdn.net/mwuploads/wikidex/a/a2/latest/20140714153502/Sixto_ROZA.png",
        "Phoebe":"https://images.wikidexcdn.net/mwuploads/wikidex/7/75/latest/20140714151533/F%C3%A1tima_ROZA.png",
        "Glacia":"https://images.wikidexcdn.net/mwuploads/wikidex/7/74/latest/20150111191534/N%C3%ADvea_ROZA.png",
        "Drake":"https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20150120222020/Drac%C3%B3n.png",
        "Steven Stone":"https://images.wikidexcdn.net/mwuploads/wikidex/9/9d/latest/20220326175257/M%C3%A1ximo_Pe%C3%B1as_ROZA.png",
        "Roark":"https://images.wikidexcdn.net/mwuploads/wikidex/3/3f/Roco.png",
        "Gardenia":"https://images.wikidexcdn.net/mwuploads/wikidex/4/47/Gardenia.png",
        "Maylene":"https://images.wikidexcdn.net/mwuploads/wikidex/0/0a/Brega.png",
        "Crasher Wake":"https://images.wikidexcdn.net/mwuploads/wikidex/f/f0/Mananti.png",
        "Fantina":"https://images.wikidexcdn.net/mwuploads/wikidex/8/84/Fantina.png",
        "Byron":"https://images.wikidexcdn.net/mwuploads/wikidex/1/10/Acer%C3%B3n.png",
        "Candice":"https://images.wikidexcdn.net/mwuploads/wikidex/d/dc/Inverna.png",
        "Volkner":"https://images.wikidexcdn.net/mwuploads/wikidex/0/00/Lectro.png",
        "Aaron":"https://images.wikidexcdn.net/mwuploads/wikidex/3/3b/latest/20220427060111/Alecr%C3%A1n.png",
        "Bertha":"https://images.wikidexcdn.net/mwuploads/wikidex/8/80/latest/20220215032416/Gaia.png",
        "Flint":"https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20221225234058/Fausto.png",
        "Lucian":"https://images.wikidexcdn.net/mwuploads/wikidex/f/f0/latest/20220324044234/Delos.png",
        "Cynthia":"https://images.wikidexcdn.net/mwuploads/wikidex/c/cb/latest/20220716143241/Cynthia_%28Viajes_Pok%C3%A9mon%29.png",
        "Cilan":"https://images.wikidexcdn.net/mwuploads/wikidex/d/d8/latest/20150715031419/Cilan_%28anime%29.png",
        "Chili":"https://images.wikidexcdn.net/mwuploads/wikidex/e/e4/latest/20110613020447/Zeo.png",
        "Cress":"https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20110613020514/Ma%C3%ADz.png",
        "Lenora":"https://images.wikidexcdn.net/mwuploads/wikidex/b/b8/latest/20110613020229/Aloe_sin_delantal.png",
        "Burgh":"https://images.wikidexcdn.net/mwuploads/wikidex/a/ad/latest/20210925040752/Camus.png",
        "Elesa":"https://images.wikidexcdn.net/mwuploads/wikidex/7/7a/latest/20190414142503/Ilustraci%C3%B3n_de_Camila_N2B2.png",
        "Clay":"https://images.wikidexcdn.net/mwuploads/wikidex/a/aa/latest/20210914231853/Yak%C3%B3n.png",
        "Skyla":"https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20220331034736/Gerania.png",
        "Brycen":"https://images.wikidexcdn.net/mwuploads/wikidex/6/6b/latest/20210925042240/Junco.png",
        "Drayden":"https://images.wikidexcdn.net/mwuploads/wikidex/e/e2/latest/20110613015242/Lirio.png",
        "Iris":"https://images.wikidexcdn.net/mwuploads/wikidex/a/ac/latest/20120714032647/Ilustraci%C3%B3n_de_Iris_N2B2.png",
        "Cheren":"https://images.wikidexcdn.net/mwuploads/wikidex/4/41/latest/20190414144424/Ilustraci%C3%B3n_de_Cheren_N2_B2.png",
        "Roxie":"https://images.wikidexcdn.net/mwuploads/wikidex/c/c2/latest/20190414142359/Hiedra.png",
        "Marlon":"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20141116034345/Cipri%C3%A1n.png",
        "Shauntal":"https://images.wikidexcdn.net/mwuploads/wikidex/e/e6/latest/20110607230631/An%C3%ADs.png",
        "Grimsley":"https://images.wikidexcdn.net/mwuploads/wikidex/1/19/latest/20220317044422/Aza_SL.png",
        "Marshal":"https://images.wikidexcdn.net/mwuploads/wikidex/d/dd/latest/20110613014459/Lotto.png",
        "Caitlin":"https://images.wikidexcdn.net/mwuploads/wikidex/8/8b/latest/20220408011747/Catleya.png",
        "Alder":"https://images.wikidexcdn.net/mwuploads/wikidex/a/ac/latest/20220423035220/Mirto.png",
        "Viola":"https://images.wikidexcdn.net/mwuploads/wikidex/a/a1/latest/20221105020620/Violeta.png",
        "Grant":"https://images.wikidexcdn.net/mwuploads/wikidex/b/b2/latest/20130712191505/Lino.png",
        "Korrina":"https://images.wikidexcdn.net/mwuploads/wikidex/7/72/latest/20221105023655/Corelia.png",
        "Ramos":"https://images.wikidexcdn.net/mwuploads/wikidex/d/d1/latest/20230115035231/Amaro.png",
        "Clemont":"https://images.wikidexcdn.net/mwuploads/wikidex/c/c3/latest/20150612223940/Lem_%28anime_XY%29.png",
        "Valerie":"https://images.wikidexcdn.net/mwuploads/wikidex/0/08/latest/20230114033934/Valeria.png",
        "Olympia":"https://images.wikidexcdn.net/mwuploads/wikidex/9/92/latest/20230116012347/%C3%81strid.png",
        "Wulfric":"https://images.wikidexcdn.net/mwuploads/wikidex/a/a1/latest/20140714035722/%C3%89del.png",
        "Wikstrom":"https://images.wikidexcdn.net/mwuploads/wikidex/9/93/latest/20140714034719/Tileo.png",
        "Malva":"https://images.wikidexcdn.net/mwuploads/wikidex/8/8b/latest/20221225234004/Malva.png",
        "Drasna":"https://images.wikidexcdn.net/mwuploads/wikidex/9/90/latest/20140714034912/Dr%C3%A1cena.png",
        "Siebold":"https://images.wikidexcdn.net/mwuploads/wikidex/b/bc/latest/20210422094955/Narciso.png",
        "Diantha":"https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20220315194115/Dianta.png",
        "Hala":"https://images.wikidexcdn.net/mwuploads/wikidex/b/b9/latest/20160801150604/Kaudan.png",
        "Olivia":"https://images.wikidexcdn.net/mwuploads/wikidex/f/f3/latest/20190710122655/Olivia.png",
        "Nanu":"https://images.wikidexcdn.net/mwuploads/wikidex/c/ca/latest/20190723235416/Denio.png",
        "Hapu":"https://images.wikidexcdn.net/mwuploads/wikidex/d/db/latest/20190723233936/Hela.png",
        "Acerola":"https://images.wikidexcdn.net/mwuploads/wikidex/8/80/latest/20210917225627/Zarala_%28anime%29.png",
        "Kahili":"https://images.wikidexcdn.net/mwuploads/wikidex/6/61/latest/20190723235827/Kahili.png",
        "Molayne":"https://images.wikidexcdn.net/mwuploads/wikidex/0/06/latest/20170418011054/Lario.png",
        "Kukui":"https://images.wikidexcdn.net/mwuploads/wikidex/5/51/latest/20160602131830/Profesor_Kukui.png",
        "Hau":"https://images.wikidexcdn.net/mwuploads/wikidex/3/36/latest/20230426045543/Tilo_USUL.png",
        "Milo":"https://images.wikidexcdn.net/mwuploads/wikidex/4/48/latest/20190608005538/Percy.png",
        "Nessa":"https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20190611181923/Cathy.png",
        "Kabu":"https://images.wikidexcdn.net/mwuploads/wikidex/2/20/latest/20220315043409/Naboru.png",
        "Bea":"https://images.wikidexcdn.net/mwuploads/wikidex/1/10/latest/20190709003046/Judith.png",
        "Allister":"https://images.wikidexcdn.net/mwuploads/wikidex/4/4c/latest/20190708202421/Alistair.png",
        "Opal":"https://images.wikidexcdn.net/mwuploads/wikidex/2/2e/latest/20220315052349/Sally.png",
        "Gordie":"https://images.wikidexcdn.net/mwuploads/wikidex/9/90/latest/20220314182240/Morris.png",
        "Melony":"https://images.wikidexcdn.net/mwuploads/wikidex/e/ee/latest/20220404234418/Mel.png",
        "Piers":"https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20220314200514/Nerio.png",
        "Raihan":"https://images.wikidexcdn.net/mwuploads/wikidex/9/92/latest/20220314203122/Roy.png",
        "Marnie":"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20220314193258/Roxy.png",
        "Hop":"https://images.wikidexcdn.net/mwuploads/wikidex/0/00/latest/20220314194710/Paul.png",
        "Bede":"https://images.wikidexcdn.net/mwuploads/wikidex/8/80/latest/20200805032014/Berto.png",
        "Leon":"https://images.wikidexcdn.net/mwuploads/wikidex/b/be/latest/20220314191026/Lionel.png",
        "Katy":"https://images.wikidexcdn.net/mwuploads/wikidex/c/c1/latest/20230112204228/Araceli.png",
        "Brassius":"https://images.wikidexcdn.net/mwuploads/wikidex/7/7a/latest/20220907135340/Brais.png",
        "Iono":"https://images.wikidexcdn.net/mwuploads/wikidex/9/94/latest/20230727092309/E-Nigma_%28Horizontes_Pok%C3%A9mon%29.png",
        "Kofu":"https://images.wikidexcdn.net/mwuploads/wikidex/9/97/latest/20230112204801/Fuco.png",
        "Larry":"https://images.wikidexcdn.net/mwuploads/wikidex/2/2c/latest/20230112205055/Laureano.png",
        "Ryme":"https://images.wikidexcdn.net/mwuploads/wikidex/d/d5/latest/20230112205509/Lima.png",
        "Tulip":"https://images.wikidexcdn.net/mwuploads/wikidex/3/30/latest/20230115002725/Tuli.png",
        "Grusha":"https://images.wikidexcdn.net/mwuploads/wikidex/4/46/latest/20220803133424/Grusha.png",
        "Rika":"https://images.wikidexcdn.net/mwuploads/wikidex/4/49/latest/20230712033832/Cayena.png",
        "Poppy":"https://images.wikidexcdn.net/mwuploads/wikidex/7/7f/latest/20230712033832/Pola.png",
        "Hassel":"https://images.wikidexcdn.net/mwuploads/wikidex/5/51/latest/20230712033832/Hesperio.png",
        "Nemona":"https://images.wikidexcdn.net/mwuploads/wikidex/d/d8/latest/20220601164607/Menc%C3%ADa.png",
        "Geeta":"https://images.wikidexcdn.net/mwuploads/wikidex/a/a3/latest/20220907134756/S%C3%A1gita.png",
    }

    return (
        <div className=" bg-lime-200 absolute top-7 right-7 w-[600px] h-[475px] border-4 border-lime-900 shadow-sm shadow-lime-900">
            <div className="w-full h-full relative">
                <div className=" bg-white absolute top-2 left-2 w-[220px] h-[400px] border-4 border-lime-900 flex items-center justify-center overflow-hidden rounded-xl shadow-sm shadow-lime-900">
                    <img className=" max-w-[215px] max-h-[395px]" src={trainersUrls[trainers[trainersIndex].name]} alt="Trainer image" />
                </div>
                <div className="outline-4 outline-lime-900 outline w-[210px] h-[32px] absolute bottom-[13px] left-[13px] grid grid-cols-2 rounded-xl shadow-sm shadow-lime-900">
                <button onClick={prevTrainer}>
                        <div className="w-full h-full bg-lime-500 border-l-2 border-lime-900 flex items-center justify-center">
                            <FaLongArrowAltLeft className=" w-[30px] h-[30px] hover:scale-150 transition-transform duration-150" />
                        </div>
                    </button>
                    <button onClick={nextTrainer}>
                        <div className="w-full h-full bg-lime-500 border-l-2 border-lime-900 flex items-center justify-center">
                            <FaLongArrowAltRight className=" w-[30px] h-[30px] hover:scale-150 transition-transform duration-150" />
                        </div>
                    </button>
                </div>
                <div className=" bg-lime-100 absolute top-[308px] right-2 w-[350px] h-[150px] border-4 border-lime-900 grid grid-cols-1 px-1 items-center text-sm rounded-xl shadow-sm shadow-lime-900">
                    <p className="border-b-2 border-lime-900 text-lg">
                        <span className="text-lg">{trainers[trainersIndex].name} </span>
                        {
                            !!trainers[trainersIndex].dependsOn ? (
                                trainers[trainersIndex].name === 'Blue' ? (
                                    trainers[trainersIndex].dependsOn.toLowerCase() === 'vaporeon' ||
                                        trainers[trainersIndex].dependsOn.toLowerCase() === 'jolteon' ||
                                        trainers[trainersIndex].dependsOn.toLowerCase() === 'flareon' ?
                                        <span className="text-sm">If Eevee evolve into {trainers[trainersIndex].dependsOn}</span> :
                                        <span className="text-sm">If you choose {trainers[trainersIndex].dependsOn}</span>
                                ) : <span className="text-sm">If you choose {trainers[trainersIndex].dependsOn}</span>
                            ) : ''
                        }
                    </p>
                    <div className="grid gird-col-2">
                        <p>GAME: {trainers[trainersIndex].game}</p>
                        <p>RANGE: {trainers[trainersIndex].range}</p>
                        <p>REGION: {trainers[trainersIndex].region}</p>
                        <p>LOCATION: {trainers[trainersIndex].location}</p>
                        <p>GENERATION: {trainers[trainersIndex].generation}</p>
                    </div>
                </div>
                <div className="absolute bottom-1 left-1 w-[583px] h-[25px] flex items-center justify-start px-3 text-lg">

                </div>
                <div className=" bg-lime-100 absolute top-2 right-2 w-[350px] h-[290px] border-4 border-lime-900 grid grid-cols-1 text-sm shadow-sm shadow-lime-900">
                    <div className="grid grid-cols-1">
                        <div className="flex items-center justify-center border-b-2 border-lime-900 bg-lime-600 text-lime-100">
                            <p>{trainers[trainersIndex].pokemon[0].name}</p>
                        </div>
                        <div className="flex items-center justify-around border-y-2 border-lime-900">
                            <p className="">{trainers[trainersIndex].pokemon[0].type1}</p>
                            <p>{trainers[trainersIndex].pokemon[0].type2}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="flex items-center justify-center border-y-2 border-lime-900 bg-lime-600 text-lime-100">
                            <p>{!!trainers[trainersIndex].pokemon[1].name ? trainers[trainersIndex].pokemon[1].name : '-'}</p>
                        </div>
                        <div className="flex items-center justify-around border-y-2 border-lime-900">
                            <p className="">{!!trainers[trainersIndex].pokemon[1].type1 ? trainers[trainersIndex].pokemon[1].type1 : '-'}</p>
                            <p>{!!trainers[trainersIndex].pokemon[1].type2 ? trainers[trainersIndex].pokemon[1].type2 : '-'}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="flex items-center justify-center border-y-2 border-lime-900 bg-lime-600 text-lime-100">
                            <p>{!!trainers[trainersIndex].pokemon[2].name ? trainers[trainersIndex].pokemon[2].name : '-'}</p>
                        </div>
                        <div className="flex items-center justify-around border-y-2 border-lime-900">
                            <p className="">{!!trainers[trainersIndex].pokemon[2].type1 ? trainers[trainersIndex].pokemon[2].type1 : '-'}</p>
                            <p>{!!trainers[trainersIndex].pokemon[2].type2 ? trainers[trainersIndex].pokemon[2].type2 : '-'}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="flex items-center justify-center border-y-2 border-lime-900 bg-lime-600 text-lime-100">
                            <p>{!!trainers[trainersIndex].pokemon[3].name ? trainers[trainersIndex].pokemon[3].name : '-'}</p>
                        </div>
                        <div className="flex items-center justify-around border-y-2 border-lime-900">
                            <p className="">{!!trainers[trainersIndex].pokemon[3].type1 ? trainers[trainersIndex].pokemon[3].type1 : '-'}</p>
                            <p>{!!trainers[trainersIndex].pokemon[3].type2 ? trainers[trainersIndex].pokemon[3].type2 : '-'}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="flex items-center justify-center border-y-2 border-lime-900 bg-lime-600 text-lime-100">
                            <p>{!!trainers[trainersIndex].pokemon[4].name ? trainers[trainersIndex].pokemon[4].name : '-'}</p>
                        </div>
                        <div className="flex items-center justify-around border-y-2 border-lime-900">
                            <p className="">{!!trainers[trainersIndex].pokemon[4].type1 ? trainers[trainersIndex].pokemon[4].type1 : '-'}</p>
                            <p>{!!trainers[trainersIndex].pokemon[4].type2 ? trainers[trainersIndex].pokemon[4].type2 : '-'}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="flex items-center justify-center border-y-2 border-lime-900 bg-lime-600 text-lime-100">
                            <p>{!!trainers[trainersIndex].pokemon[5].name ? trainers[trainersIndex].pokemon[5].name : '-'}</p>
                        </div>
                        <div className="flex items-center justify-around border-t-2 border-lime-900">
                            <p className="">{!!trainers[trainersIndex].pokemon[5].type1 ? trainers[trainersIndex].pokemon[5].type1 : '-'}</p>
                            <p>{!!trainers[trainersIndex].pokemon[5].type2 ? trainers[trainersIndex].pokemon[5].type2 : '-'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}