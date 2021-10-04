import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const {state, reset, increment, decrement} = useCounter();



    return (
        <div>
            <h1>Counter With Hook: {state}</h1>
            <hr/>
            <button className="btn btn-primary mr-2" onClick={()=>increment(20)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            <button className="btn btn-primary" onClick={()=>decrement(20)}>-1</button>
        </div>
    )
}
