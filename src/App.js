function App() {
  return (
    <div className="wrapper clear">

      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина<img className="cu-p" src="/img/btn-remove.svg" alt="" />
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">

              <div style={{ backgroundImage: 'url("/img/sneakers/image 8.jpg"' }} className='cartItemImg'></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
            </div>
            <div className="cartItem d-flex align-center">

              <div style={{ backgroundImage: 'url("/img/sneakers/image 8.jpg"' }} className='cartItemImg'></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
            </div>

          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21498 руб.</b>
              </li>
              <li>
                <span>Налог 5%</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ <img src="/img/strelka.svg" alt="стрелка" /> </button>
          </div>


        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/image 4.png" alt="" />
          <div className="headreInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="" />

            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/Union.svg" alt=""></img>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />

          </div>

        </div>

        <div className="d-flex justify-between">

          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="" />
            </div>
            <img width={133} height={112} src="/img/sneakers/green.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="plus"></img> </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/image 2.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="plus"></img> </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/image 3.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>8 499 руб.</b>
              </div>
              <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="plus"></img> </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/image 4.jpg" alt="" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>8 999 руб.</b>
              </div>
              <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="plus"></img> </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;




























