import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0})
    const {x,y} = coords;

    useEffect(() => {
        const mouseMove = ({x, y}) => {
            setCoords({x,y});
            // console.log(coords)
            // console.log(':D')
        }
        window.addEventListener('mousemove', mouseMove)
        

        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log('Componente desmontado')
        }
    }, [])
    return (
        <div>
            <h3>Eres Genial</h3>
            <p>x: {x} y: {y}</p>
        </div>
    )
}
