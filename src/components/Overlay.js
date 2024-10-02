import { useState } from "react";
import Info from "./info";
import axios from "axios";
export default function Overlay({
  onClose,
  items = [],
  onRemove,
  isCartEmpty,
}) {
  const [isBought, setIsBought] = useState(false);
  const totalPrice = items.reduce((sum, obj) => obj.price + sum, 0);
  const onClickBought = (items) => {
    if (items.length !== 0) {
      axios.post("http://localhost:3000/orders", items);
      setIsBought(true);
    } else {
      alert("У вас пустая корзина!");
    }
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="drawerTop">
          Корзина{" "}
          <img
            onClick={onClose}
            className="btnRemove"
            src="/img/btn-remove.svg"
            alt="CloseDrawer"
          ></img>
        </h2>
        {isCartEmpty ? (
          <div className="items">
            <Info></Info>
          </div>
        ) : isBought ? (
          <Info isBought={isBought}></Info>
        ) : (
          <div className="items">
            {items.map((obj) => (
              <div className="cartItem">
                <img
                  className="sneakerDrawer"
                  width={70}
                  height={70}
                  src={obj.imageUrl}
                  alt="SneakerCart"
                ></img>
                <div>
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id, items)}
                  className="btnRemove"
                  src="/img/btn-remove.svg"
                  alt="Remove"
                ></img>
              </div>
            ))}
          </div>
        )}
        <ul>
          <li className="drawerPrice">
            <span>Итого:</span>
            <b>{Math.round(totalPrice * 1.05)} руб.</b>
          </li>
          <li className="drawerPrice">
            <span>Налог 5%</span>
            <b>{Math.round(totalPrice * 0.05)} руб.</b>
          </li>
        </ul>
        '
        <button className="greenButton" onClick={() => onClickBought(items)}>
          Оформить заказ<img src="/img/arrowInBtn.svg" alt="Arrow"></img>
        </button>
        '
      </div>
    </div>
  );
}
