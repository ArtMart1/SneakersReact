import React, { useState } from "react";
export default function Card({title, price, imageUrl, onPlus,onFavorite, favorited=false}) {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] =useState(favorited)
  
  const onClickPlus= () =>{
    onPlus({title, price, imageUrl})  
    setIsAdded(!isAdded)
    
  }
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
    onFavorite({title, price, imageUrl}) 
  }
  return (
    <div className="card">
      <div className="favorite" onClick={onClickFavorite}>
        <img  src={!isFavorite? "/img/heart-unliked.svg" : "/img/heart-liked.svg"} alt="Favorite"></img>
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneaker"></img>
      <p>{title}</p>
      <div className="cardBottom">
        <div className="price">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
         <img onClick={onClickPlus} className="plus" width={32} height={32} src={isAdded? '/img/btn-checked.svg': '/img/btn-plus.svg'} alt="Plus"></img>
        
      </div>
    </div>
  );
}
