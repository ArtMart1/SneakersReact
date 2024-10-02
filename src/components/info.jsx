import React from "react";
const Info = ({ isBought }) => {

  return (
    <>
      {isBought ? (
        <h1 className="items">Заказ оформлен
        
        </h1>
      ) : (
        <h1 className="items">Корзина пуста</h1>
      )}
    </>
  );
};
export default Info;
