import "./Cart.css";
import CartItem from "./CartItem/CartItem";
import * as Icon from "react-feather";

const Cart = (props) => {
  const closeCart = (e) => {
    e.preventDefault();
    props.showCartControl();
  };

  const renderCart = props.carts.map((i) => {
    return (
      <CartItem
        item={i}
        onAdd={props.onAdd}
        onSub={props.onSub}
        onDelete={props.onDelete}
      />
    );
  });
  return (
    <div className='Cart'>
      <Icon.XSquare className='Cart-btn' onClick={closeCart} />
      <h2>Check list</h2>
      <div className='Cart-container'>{renderCart}</div>
      <p>Total products: {props.totalP} </p>
      <p>Total values: {props.totalQ} </p>
    </div>
  );
};

export default Cart;
