import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return(
        <div className={styles.container}>
        <div className={styles.item}>
        <div className={styles.callButton}>
            <img src = "/img/telephone.png" alt="" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW</div>
        <div className={styles.text}>011 245 5600</div>
        </div></div>

        <div className={styles.item}>
           <ul className={styles.list}>
            <li className={styles.listItem}> HomePage </li>
            <li className={styles.listItem}> Products </li>
            <li className={styles.listItem}> Menu </li>
            <img src="/img/logo2.png" alt="" width="150" height="100px"/>
            <li className={styles.listItem}> Events </li>
            <li className={styles.listItem}> Blog </li>
            <li className={styles.listItem}> Contact </li>
           </ul>
            </div>
        <div className={styles.item}>
        <div className={styles.cart}>
        <img src="/img/cart.png" alt="" width="30" height="30px"/>
        <div className={styles.counter}>2</div>
        </div>
        </div>
           
        </div>
    )
}

export default Navbar;