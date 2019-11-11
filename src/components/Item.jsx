import React from 'react'

const Item = ({ item:{id, description, amount} }) => {
    return (
        <li>
           <div className="">{description}
            {amount}</div>
            
        </li>
    )
}

export default Item
