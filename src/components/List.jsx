import React, { Fragment } from "react";
import Item from "./Item";
const List = ({ budgetItems ,deleteItem, deleteAllBudgetItems, editItem}) => {
  return (
    <Fragment>
      <ul className="list">
        {budgetItems.map(item => {
          return <Item key={item.id} item={item} deleteItem={deleteItem} editItem={editItem}/>;
        })}
      </ul>
      <button className="btn" onClick={deleteAllBudgetItems}>
        Delete All
      </button>
    </Fragment>
  );
};

export default List;
