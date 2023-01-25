import Card from './components/Card'
import Header from './components/Header';
import Drawer from './Drawer';
import { useEffect, useState } from 'react';



function App() {
  const [items, setItems] = useState([]);
  const [cartOpened , setCartOpened] = useState(false);

useEffect(()=>{
  fetch('https://63d1a66c3f08e4a8ff9b627a.mockapi.io/items').then((res) => {
    return res.json();
  }).then(json => {
    setItems(json)
  });
},[]);
  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={()=> setCartOpened(false)}/> : null}  
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

          {items.map((obj) => (
            <Card title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={() => console.log('Нажали на плюс')} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;




























