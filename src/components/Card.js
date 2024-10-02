import React, { useContext, useState } from "react";
import AppContext from "../context";
export default function Card({
  id,
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const { isItemAdded } = useContext(AppContext);
  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ id, title, price, imageUrl });
  };
  return (
    <div className="card">
      <div className="favorite" onClick={onClickFavorite}>
        {onFavorite&&<img
          src={!isFavorite ? "/img/heart-unliked.svg" : "/img/heart-liked.svg"}
          alt="Favorite"
        ></img>}
        
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneaker"></img>
      <p>{title}</p>
      <div className="cardBottom">
        <div className="price">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        {onPlus&&<img
          onClick={onClickPlus}
          className="plus"
          width={32}
          height={32}
          src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        ></img>}
        
      </div>
    </div>
  );
}
