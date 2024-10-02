import { useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import AppContext from "../context";
export default function Header(props) {
  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header>
      <Link to={"/"}>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Logo"></img>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight">
        <li className="cart" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/Cart.svg" alt="Cart"></img>
          <span>{Math.round(totalPrice * 1.05)} руб.</span>
        </li>
        <li>
          <Link to={"/favorites"}>
            <img
              width={18}
              height={18}
              src="/img/heart.svg"
              alt="Favorite"
            ></img>
            <span>Закладки</span>
          </Link>
        </li>
        <li>
          <Link to={"/orders"}>
            <img
              width={18}
              height={18}
              src="/img/profile.svg"
              alt="Profile"
            ></img>
            <span>Профиль</span>  
          </Link>
        </li>
      </ul>
    </header>
  );
}
