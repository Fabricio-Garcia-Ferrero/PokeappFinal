import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc, setDoc, getDocs, deleteDoc, getDoc} from "firebase/firestore"
import { IPokeFavData } from "../components/Interfaces";

const firebaseConfig = {
  apiKey: "AIzaSyCq9592oxey2ty7_fQ542klygBiWwovzWw",
  authDomain: "proyectoppp-cf6fe.firebaseapp.com",
  projectId: "proyectoppp-cf6fe",
  storageBucket: "proyectoppp-cf6fe.appspot.com",
  messagingSenderId: "269420165527",
  appId: "1:269420165527:web:978b5c41b7942f9070acd2",
  measurementId: "G-GXM3E6V5JP"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const Favoritos = collection(db, "Favoritos");

export const addFavorite = async (pokemonData: IPokeFavData, id: number) => {
  await setDoc(doc(db,'Favoritos',id.toString()), pokemonData )
}

export const getFavorite = async (): Promise<any[]> => {
  const favs:any[] = []
  const docs = await getDocs(Favoritos)
  docs.forEach((document)=>{
    favs.push({id:document.id,...document.data()})
  })
  return favs
}

export const delFavorite = async(id:string) => {
  const pokeDoc = doc(db,"Favoritos",id)
  await deleteDoc(pokeDoc)
}