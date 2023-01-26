import Card from './components/Card'
import Header from './components/Header';
import Drawer from './Drawer';
import { useEffect, useState } from 'react';



function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened , setCartOpened] = useState(false);

useEffect(()=>{
  fetch('https://63d1a66c3f08e4a8ff9b627a.mockapi.io/items').then((res) => {
    return res.json();
  }).then(json => {
    setItems(json)
  });
},[]);

const onAddToCart = (obj) => {
  setCartItems([...cartItems, obj])
  
};
console.log(cartItems)

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onClose={()=> setCartOpened(false)}/> : null}  
      <Header onClickCart={()=> {setCartOpened(true)}} />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap ">

          {items.map((item) => (
            <Card title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddToCart(obj)} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;




























