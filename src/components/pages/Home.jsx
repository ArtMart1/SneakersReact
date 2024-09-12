import Card from "../Card";
export default function Home({
  items,
  onChangeInput,
  searchValue,
  onAddToCart,
  onAddToFavorite
}) {
  return (
    <div className="home">
      <div className="content">
        <h1>
          {searchValue ? `Поиск по запросу ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search">
          <img width={14} height={14} src="/img/Lupa.svg" alt="Search"></img>
          <input onChange={onChangeInput} placeholder="Поиск..."></input>
        </div>
      </div>

      <div className="cards">
        {items
          .filter((item) =>
            item.title
              .toLowerCase()
              .includes(searchValue.toString().toLowerCase())
          )
          .map((obj, index) => (
            <Card
              key={index}
              title={obj.title}s
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={(object) => {
                onAddToCart(object);
              }}
              onFavorite={(object) => {
                onAddToFavorite(object);
              }}
              favorited = {false}
            />
          ))}
      </div>
    </div>
  );
}
