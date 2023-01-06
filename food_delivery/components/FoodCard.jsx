import styles from '../styles/FoodCard.module.css';
import Image from 'next/image';

const Footer = () => {
    return(
        <div className={styles.container}>
          
           <Image src= "/img/salad.png" alt="" width="500" height="500" />
           <h1 className={styles.title}>Vegetable Salad</h1>
           <span className ={styles.price}>RS.900</span>
           <p className= {styles.desc}>
           Vegetable salads may be marinated or sauced mixtures of raw or cooked vegetables. They are commonly based on tomatoes, green beans, cucumbers, beets, and mushrooms. Cole slaw (from the Dutch kool, “cabbage”) is made of shredded or chopped cabbage with a mayonnaise or vinegar-based dressing.
             </p>
        </div>
    )
}

export default Footer;