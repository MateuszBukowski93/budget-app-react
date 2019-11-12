import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Item = ({ item: { id, description, amount }, deleteItem, editItem }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="description">{description}</span>
        {amount > 0 && <span className="amount income">{amount}</span>}
        {amount < 0 && <span className="amount outcome">{amount}</span>}
       
      </div>
      <div className="btn-group">
        <button className="edit-btn" onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button className="clear-btn" onClick={() => deleteItem(id)}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default Item;
