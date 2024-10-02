import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import React, { useState, useEffect } from "react";
import Favorites from "./components/pages/Favorites";
import AppContext from "./context";
import Orders from "./components/pages/Orders";
function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get("http://localhost:3000/cart");

      const favoritesResponse = await axios.get(
        "http://localhost:3000/favorites"
      );

      const itemsResponse = await axios.get("http://localhost:3000/items");

      setItems(itemsResponse.data);
      setCartItems(cartResponse.data);
      setFavorite(favoritesResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = async (object) => {
    try {
      if (cartItems.find((cartObj) => cartObj.id === object.id)) {
        axios.delete(`http://localhost:3000/cart/${object.id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== object.id));
      } else {
        axios.post("http://localhost:3000/cart", object);
        setCartItems((prev) => [...prev, object]);
        setIsCartEmpty(false);
      }
    } catch (error) {
      console.error("Не удалось");
    }
  };
  const onAddToFavorite = async (object) => {
    try {
      if (favorite.find((favObj) => favObj.id === object.id)) {
        axios.delete(`http://localhost:3000/favorites/${object.id}`);
        setFavorite((prev) => prev.filter((item) => item.id !== object.id));
      } else {
        const { data } = await axios.post(
          "http://localhost:3000/favorites",
          object
        );
        setFavorite((prev) => [...prev, data]);
      }
    } catch (err) {
      alert("Не удалось добавить в избранное");
    }
  };
  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onRemoveItem = async (id, items) => {
    try {
      // Отправляем запрос на удаление
      await axios.delete(`http://localhost:3000/cart/${id}`);
      
      // Обновляем состояние корзины в компоненте
      setCartItems(prev => prev.filter(item => item.id !== id));
      
      // Получаем обновлённое состояние корзины
      const response = await axios.get("http://localhost:3000/cart");
      const cartObj = response.data;
      
      // Проверяем, пустой ли объект
      if (Object.keys(cartObj).length === 0) {
        setIsCartEmpty(true);
        
      } else {
        
      }
    } catch (error) {
      console.error("Ошибка при запросе:", error);
    }
  };
  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.id === id);
  };

  return (
    <AppContext.Provider value={{ items, cartItems, favorite, isItemAdded }}>
      <div className="wrapper">
        {cartOpened ? (
          <Overlay
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
            isCartEmpty={isCartEmpty}
          />
        ) : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                onChangeInput={onChangeInput}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                cartItems={cartItems}
              />
            }
            exact
          />
          <Route
            path="/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} onPlus={onAddToCart}/>}
            exact
          />
          <Route
            path="/orders"
            element={<Orders/>}
            exact
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
