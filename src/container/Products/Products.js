import dat from "../../data.json";
import { Fragment, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Cart from "../../components/Cart/Cart";
import Hero from "../../components/Hero/Hero";

import "./Products.css";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";

const Products = () => {
  const category = ["men", "women", "boy", "girl"];
  const dataWithCount = dat.map((item) => {
    return {
      ...item,
      count: 1,
    };
  });

  const [data, setData] = useState(dataWithCount);
  const [carts, setCarts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [disBtn, setDisBtn] = useState(false);

  const addButtonHandler = (item) => {
    setCarts([...carts, item]);
    setShowCart(true);
    setDisBtn(true);
  };

  let totalQ = 0;
  let totalP = 0;
  carts.forEach((item) => {
    totalP += item.count * item.price;
    totalQ += item.count;
  });

  const addNumberHandler = (item) => {
    const newCart = carts.map((ele) => {
      if (item.code === ele.code) {
        return { ...ele, count: ele.count + 1 };
      } else return { ...ele };
    });
    setCarts(newCart);
  };

  const subNumberHandler = (item) => {
    if (item.count == 0) {
      deleteCartItemHandler(item);
    }
    const newCart = carts.map((ele) => {
      if (item.code === ele.code && ele.count > 1) {
        return { ...ele, count: ele.count - 1 };
      } else return { ...ele };
    });
    setCarts(newCart);
  };

  const deleteCartItemHandler = (item) => {
    const newCart = carts.filter((ele) => {
      return ele.code !== item.code;
    });
    setDisBtn(false);
    console.log(disBtn);
    setCarts(newCart);
  };

  const showCartControlHanler = () => {
    setShowCart(false);
  };

  const cart = showCart ? (
    <Cart
      carts={carts}
      totalP={totalP}
      totalQ={totalQ}
      onAdd={addNumberHandler}
      onSub={subNumberHandler}
      onDelete={deleteCartItemHandler}
      showCartControl={showCartControlHanler}
    />
  ) : null;

  return (
    <Fragment>
      <Navigation
        totalQ={totalQ}
        showCartControl={() => {
          setShowCart(true);
        }}
      />
      <Hero />
      {cart}
      {category.map((cate) => {
        return (
          <CategoryContainer
            data={data}
            title={cate}
            onClick={addButtonHandler}
            disableBtn={disBtn}
          />
        );
      })}
    </Fragment>
  );
};

export default Products;
