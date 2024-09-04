
function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width = {40} height = {40} src="/img/logo.png" ></img>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/Cart.svg"></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/heart.svg"></img>
            <span>Закладки</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg"></img>
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img width={133} height={112} src="/img/sneaker1.png"></img>
          <p>Мужские Кроссовки <br></br> Nike Blazer Mid Suede</p>
          <div className="cardBottom">
            <div className="price">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg"></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneaker2.png"></img>
          <p>Мужские Кроссовки Nike Air Max 270</p>
          <div className="cardBottom">
            <div className="price">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg"></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneaker3.png"></img>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="cardBottom">
            <div className="price">
              <span>Цена:</span>
              <b>8 499 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg"></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneaker4.png"></img>
          <p>Кроссовки Puma X Aka Boku Future Rider</p>
          <div className="cardBottom">
            <div className="price">
              <span>Цена:</span>
              <b>8 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg"></img>
            </button>
          </div>
        </div>
      </div>  
      
    </div>
  )
}

export default App;
