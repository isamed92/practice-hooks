import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../02-useEffect/effect.css'

export const RealExampleRef = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Real RealExampleRef</h1>
            <hr/>


            {show && <MultipleCustomHooks/>}

            <button className='btn btn-primary ' onClick={()=>setShow(!show)}>
                show/hide
            </button>
        </div>
    )
}
