import React, { useState, useEffect } from "react";
import styles from "./home.module.css";

function Home(){
    const [data, setData] = useState([]);
    const getData=()=>{
      fetch('movie.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
        });
    }
    useEffect(()=>{
      getData()
    },[])

    return (
        <div className={styles.body}>
            <div className={styles.containerLeft}>
                <div className = {styles.title}>
                    <h1>Indonesian Films</h1>
                </div>
                <div className = {styles.content}>
                    {
                        data && data.length>0 && data.map((item)=> {
                        return (
                            <div className = {styles.card}>
                                <div className = {styles.cardImg}>
                                    <p>{item.poster}</p>
                                </div>
                                <p>{item.nama}</p>
                            </div>
                        )})
                    }
                </div>
            </div>
            <div className={styles.containerRight}>
                <h2>Wishlist</h2>
            </div>
        </div>
    )
}

export default Home;