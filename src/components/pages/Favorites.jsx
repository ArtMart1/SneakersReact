import React from "react";
import Card from "../Card";
import AppContext from "../../context";
export default function Favorites({ onAddToFavorite, onPlus }) {
  const { favorite } = React.useContext(AppContext);

  return (
    <div className="home">
      <div className="content">
        <h1>Мои закладки</h1>
      </div>
      {favorite.length == 0 ? (
        <h1 className="sidePage">Вы пока не выбрали избранное</h1>
      ) : (
        <div className="cards">
          {favorite.map((obj, index) => (
            <Card
              key={index}
              {...obj}
              favorited={true}
              onFavorite={onAddToFavorite}
              onPlus={onPlus}
            />
          ))}
        </div>
      )}
    </div>
  );
}
