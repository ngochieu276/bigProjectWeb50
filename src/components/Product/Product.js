import "./Product.css";
import { useState } from "react";
const Product = (props) => {
  const [color, setColor] = useState(props.data.colors);
  console.log(color);
  const [image, setImage] = useState(props.data.colors[0].image);

  const colorSelect = color.map((i) => {
    return (
      <div
        className='Product__color-item'
        style={{ backgroundColor: i.code }}
        onClick={() => {
          setImage(i.image);
        }}
      ></div>
    );
  });

  const addButtonHandler = (e) => {
    e.preventDefault();
    props.onClick(props.data);
  };

  return (
    <div className='Product'>
      <div>
        <img src={image} />
        <div className='Product__color'>
          Select:
          {colorSelect}
        </div>
      </div>
      <h4>{props.data.name}</h4>
      <div>{props.data.price}</div>
      <div>{props.data.code}</div>
      <button className='addProduct-btn' onClick={addButtonHandler}>
        Add cart
      </button>
    </div>
  );
};

export default Product;
