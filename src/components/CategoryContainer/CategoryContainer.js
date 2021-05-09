import { Fragment } from "react";
import "./CategoryContainer.css";

import Product from "../Product/Product";
const CategoryContainer = (props) => {
  const categoryProducts = props.data.filter(
    (item) => item.category === props.title
  );

  const renderProduct = categoryProducts.map((item) => {
    return <Product key={item.name} data={item} onClick={props.onClick} />;
  });

  return (
    <Fragment>
      <h2>{props.title}</h2>
      <div className='Category-container'> {renderProduct}</div>
    </Fragment>
  );
};

export default CategoryContainer;
