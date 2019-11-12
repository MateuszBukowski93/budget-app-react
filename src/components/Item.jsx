import React from 'react'
import { FaTrashAlt, FaEdit } from "react-icons/fa"

const Item = ({ item:{id, description, amount}, deleteItem, editItem }) => {
    return (
        <li>
           <div className="">
           {description}
            {amount}
            <button onClick={()=>editItem(id)}>
                <FaEdit />
            </button>
            <button onClick={()=>deleteItem(id)}>
            <FaTrashAlt />
            </button>
            
            </div>
            
        </li>
    )
}

export default Item
