import React, { Fragment } from "react";
import Item from "./Item";
const List = ({ budgetItems ,deleteItem, deleteAllBudgetItems, editItem}) => {
  return (
    <Fragment>
      <ul>
        {budgetItems.map(item => {
          return <Item key={item.id} item={item} deleteItem={deleteItem} editItem={editItem}/>;
        })}
      </ul>
      <button onClick={deleteAllBudgetItems}>
        Delete All
      </button>
    </Fragment>
  );
};

export default List;
