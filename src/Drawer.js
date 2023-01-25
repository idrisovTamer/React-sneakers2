function Drawer(props) {
    return (
        <div className="overlay">


            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={props.onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
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
    )
}
export default Drawer;