import styles from "../styles/ProductList.module.css";
import FoodCard from "./FoodCard";

const ProductList = ({ProductList}) => {
    return(
        <div className= {styles.container}>
            <h1 className ={styles.title}>Very Tasty And Yummy Food For A Reasonable Price</h1>
            <p className ={styles.desc}>
            Located at Negombo. We offer a wide array of fresh food – green pork plate, chimichangas, hamburger, barbacoa plate, pizza, salads, bbq with rice and beans and more. We use the freshest ingredients in preparing our food to provide the best quality and taste. Try our delicious food today! 
            </p>
            <div className = {styles.wrapper}>
                {ProductList.map((food) => (
                     <FoodCard kry={food._id} food={food}/>
               ) )}
                
                

            </div>
        </div>
    )
}

export default ProductList;