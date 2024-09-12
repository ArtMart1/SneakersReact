
export default function Overlay({onClose, items = [], onRemove, onSumm }) {
  


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
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
            <img
              className="sneakerDrawer"
              width={70}
              height={70}
              src={ obj.imageUrl}
              alt="SneakerCart"
            ></img>
            <div>
              <p>{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img onClick={()=>onRemove(obj.id)} className="btnRemove" src="/img/btn-remove.svg" alt="Remove"></img>
          </div>
          ))}
          
        </div>
        <ul>
          <li className="drawerPrice">
            
            <span>Итого:</span>
            <b> руб.</b>
          </li>
          <li className="drawerPrice">
            <span>Налог 5%</span>
            <b>1074 руб.</b>
          </li>
        </ul>
        '
        <button className="greenButton">
          Оформить заказ<img src="/img/arrowInBtn.svg" alt="Arrow"></img>
        </button>
        '
      </div>
    </div>
  );
}
