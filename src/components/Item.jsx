import React from 'react'

const Item = ({ item:{id, description, amount} }) => {
    return (
        <li>
           
            {description}
            {amount}
        </li>
    )
}

export default Item
