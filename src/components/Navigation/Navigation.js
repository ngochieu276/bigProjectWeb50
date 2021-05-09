import "./Navigation.css";
import logo from "../../access/logo.png";
import * as Icon from "react-feather";
const Navigation = (props) => {
  const showCartHandler = (e) => {
    e.preventDefault();
    props.showCartControl();
  };
  return (
    <div className='Navigation'>
      <img src={logo} className='Navigation-logo' />
      <input type='text' placeholder='Bạn đang tìm gì'></input>
      <div>
        <Icon.ShoppingBag
          onClick={showCartHandler}
          className='Navigation-bag'
        />
        <div className='Navigation_cart-quantity'>{props.totalQ}</div>
      </div>
    </div>
  );
};

export default Navigation;
