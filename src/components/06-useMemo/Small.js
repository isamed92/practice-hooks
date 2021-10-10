import React, {memo}from 'react'

export const Small = memo(({value}) => {
    console.log('me volvieron a llamar :c')
    return (
        <small>
            {value}
        </small>
    )
})
