import styles from './Header.module.scss'

function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/image 4.png" alt="" />
          <div className={styles.headreInfo}>
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
    )
}

export default Header;