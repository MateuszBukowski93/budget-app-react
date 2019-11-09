import React, { Fragment } from "react";
import Item from "./Item";
const List = ({ budgetItems }) => {
  return (
    <Fragment>
      <ul>
        {budgetItems.map(item => {
          return <Item key={item.id} item={item}/>;
        })}
      </ul>
    </Fragment>
  );
};

export default List;
