import React, { useRef } from 'react';
import '../02-useEffect/effect.css'

export const FocusScreen = () => {
    const inputRef = useRef();
    
    const onClick = () => {
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input className="form-control" ref={inputRef}
                placeholder="Su nombre"/>
            <button type="button" class="btn btn-primary mt-5" onClick={onClick}>Focus</button>
        </div>
    )
}
