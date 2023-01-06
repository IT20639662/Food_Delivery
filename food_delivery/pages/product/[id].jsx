import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
    const [size,setSize] = useState(0)
    const food ={
        id: 1,
        img: "/img/pasta.png",
        name: "PASTA",
        price : [300,500,700],
        desc: " Pasta is considered a healthy food being relatively low in fat, high in carbohydrate, and having good protein content."
    };
    return <div className= {styles.container}>
         <div className= {styles.left}>
         <div className= {styles.imgContainer}>
          <h1>  <Image src={food.img} layout="fill" alt="" objectFit="contain"/></h1>
         </div>
         </div>
         <div className= {styles.right}>
            <h1 className={styles.title}>{food.name} </h1>
            <span className={styles.price}>RS.{food.price[size]}</span>
            <p className={styles.desc}>{food.desc}</p>
            <h3 className={styles.choose}>Choose The Size </h3>
            <div className={styles.sizes}>
            <div className={styles.size} onClick={()=>setSize(0)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Half</span>
           </div>
           <div className={styles.size} onClick={()=>setSize(1)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Normal</span>
           </div>
           <div className={styles.size} onClick={()=>setSize(2)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Large</span>
           </div>
            </div>
            <h3 className={styles.choose}>Choose Additional Ingredients</h3>
        <div className={styles.ingredients}>
        <div className={styles.option}>
            <input type="checkbox" id="double" name="double" className={styles.checkbox} />
            <label htmlFor="double">Double Ingredients </label>
            
            </div>
        <div className={styles.option}>
            <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox} />
            <label htmlFor="cheese">Extra Cheese </label>
            
            </div>
        <div className={styles.option}>
            <input type="checkbox" id="sauce" name="sauce" className={styles.checkbox} />
            <label htmlFor="sauce">Extra Sauce </label>
            
            </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
        </div>
         </div>
     </div>;
};


export default Product;