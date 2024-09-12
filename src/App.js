import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import React, { useState, useEffect } from "react";
import Favorites from "./components/pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("http://localhost:3000/cart")
      .then((res) => {
        setCartItems(res.data);
      });
      axios
      .get("http://localhost:3000/favorites")
      .then((res) => {
        setFavorite(res.data);
      });
  }, []);

  const onAddToCart = (object) => {
    axios.post("http://localhost:3000/cart", object);
    setCartItems((prev) => [...prev, object]);
  };
  const onAddToFavorite = (object) => {
    axios.post("http://localhost:3000/favorites", object);
    setFavorite((prev) => [...prev, object]);
  };
  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Overlay
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
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
            />
          }
          exact
        />
        <Route
          path="/favorites"
          element={<Favorites items={favorite} onAddToFavorite={onAddToFavorite} />}
          exact
        />
      </Routes>
    </div>
  );
}

export default App;
