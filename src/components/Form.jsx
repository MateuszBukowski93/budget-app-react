import React from 'react'
import { FaDollarSign, FaEdit  } from "react-icons/fa";

const Form = ({amount, handleAmount, description, handleDescription, handleSubmit, edit}) => {
    return (
        <form onSubmit={handleSubmit}>
           <label htmlFor="description">Description</label>
           <input type="text" id="description" name="description" placeholder="description" value={description} onChange={handleDescription}/>
           <label htmlFor="amount">Amount</label>
           <input type="text" id="amount" name="amount" placeholder="amount" value={amount} onChange={handleAmount}/>
          
            <button >
                {edit ? "Edit" :  "Submit"}
                <FaDollarSign />
            </button>           
        </form>
    )
}

export default Form
