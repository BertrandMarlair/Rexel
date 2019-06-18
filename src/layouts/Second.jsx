import React from 'react'

const Second = props => {
    return (
        <div>
            {props.children}
            {props.count}
            <button onClick={() => props.addCount('coucou')}>Add</button>    
        </div>
    )
}

export default Second