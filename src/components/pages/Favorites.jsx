import Card from "../Card";
export default function Favorites({items, onAddToFavorite}) {
  return (
    <div className="home">
      <div className="content">
        <h1>
          Мои закладки
        </h1>
        
      </div>

      <div className="cards">
        {items
          .map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              favorited={true}
              
            />
          ))}
      </div>
    </div>
  );
}
