import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Featured from '../components/Featured';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';

export default function Home(ProductList) {

 
  return (
    <div className={styles.container}>
 
      <Head>
        <title>P & T Food House</title>
        <meta name="description" content="Very tasty and yummy food for a reasonable price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Featured/>
    <ProductList  ProductList={ProductList}/>

  

    </div>
  )
}

export const getServerSideProps = async() =>{
  const res =await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      ProductList:res.data,
    }
  }
}