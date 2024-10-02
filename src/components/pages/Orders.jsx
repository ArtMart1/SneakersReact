import React, { useState, useEffect } from "react";
import Card from "../Card";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/orders");

        const allItems = data.flatMap(order => 
          Object.keys(order)
            .filter(key => !isNaN(key)) // Оставляем только числовые ключи
            .map(key => order[key])      // Извлекаем товары
        );

        setOrders(allItems);

      } catch (error) {
        alert("Не удалось обработать заказы");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="home">
      <div className="content">
        <h1>Мои заказы</h1>
      </div>

      <div className="cards">
        {orders.length > 0 ? (
          orders.map((obj, index) => (
            <Card key={index} {...obj} />
          ))
        ) : (
          <div>У вас пока нет заказов</div>
        )}
      </div>
    </div>
  );
}
