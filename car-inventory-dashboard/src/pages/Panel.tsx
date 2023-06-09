import { useState, useEffect } from 'react';
import Character from "../components/Person";
import Body from '../components/Body';
import { Persona } from '../components/Person';

const api = import.meta.env.VITE_APP_BASE_API

export default function Panel() {
    const [charactersArray, setCharactersArray] = useState<Persona[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${api}/characters`)
            if (res.ok) {
                const data = await res.json()
                setCharactersArray(data)
            }
        })()
    },[])
    
    return (
        <>
        <Body sidebar makePost>
    
            {charactersArray.slice(0,10).map((c) => {
                
                return <Character
                    key={c.id}
                    char={c}
                /> 
            }
            
        
        </Body>
        </>
    )
}