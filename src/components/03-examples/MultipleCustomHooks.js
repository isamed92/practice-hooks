import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'

import '../02-useEffect/effect.css'

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1)
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {author, quote} = !!data && data[0] 

    return (
        <>
            <h1>Frases Breaking bad</h1>
            <hr/>
           { loading ?
            (<div className="alert alert-info text-center">
                Cargando...
            </div>)
            :
            (<blockquote className="blockquote text-end">
                <p className="blockquote">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>)}

            <button className="btn btn-dark" onClick={increment}>Siguiente frase</button>

        </>
    )
}
