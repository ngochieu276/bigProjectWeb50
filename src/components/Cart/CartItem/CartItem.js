import "./CartItem.css";
import * as Icon from "react-feather";

const CartItem = (props) => {
  const onAddHandler = (e) => {
    e.preventDefault();
    props.onAdd(props.item);
  };

  const onSubHandler = (e) => {
    e.preventDefault();
    props.onSub(props.item);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    props.onDelete(props.item);
  };
  return (
    <div className='CartItem'>
      <img src={props.item.colors[0].image} alt='' />
      <div className='Cart-details'>
        <p>{props.item.name}</p>

        <div>{props.item.price}</div>
        <div>{props.item.code}</div>
      </div>
      <div className='Cart-control'>
        <div className='Cart-quantity'>
          <Icon.PlusCircle size={12} onClick={onAddHandler} />
          <p>{props.item.count}</p>
          <Icon.MinusCircle size={12} onClick={onSubHandler} />
        </div>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
