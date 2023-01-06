import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
    return(
        <div className = {styles.container}>
            <div className = {styles.item}>
                <Image src ="/img/bg.png" layout= "fill" alt=""/>
            </div>
            <div className = {styles.item}>

            <div className = {styles.card}>
                <h2 className={styles.motto}>
                    YUMMY FOODS FOR OUR RELIABLE CUSTOMERS.
                </h2>
            </div>
            <div className = {styles.card}>
                <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
           <p className={styles.text}>
            13B, Samanala Uyana
            <br /> Galle
            <br /> 092- 566 5666
           </p>
            </div>
            <div className = {styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
           MONDAY UNTIL FRIDAY
            <br /> 9.30a.m. - 5.00p.m.
          </p>
          <p className={styles.text}>
           SATURDAY & SUNDAY
            <br /> 11.30a.m. - 4.00p.m.
          </p>
            </div>

            </div>
        </div>
    )
}

export default Footer;