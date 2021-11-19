import React,{useState,useEffect} from 'react';
import styles from "./home.module.css";
import MovieData from '../public/MovieData';

function Home() {
  const [wishlist, setWishlist] = useState([]);
  const handleClick = (name) =>{
    setWishlist(wishlist => [...wishlist, name]);
  }

  return (
    <div className={styles.body}>
            <div className={styles.containerLeft}>
                <div className = {styles.title}>
                    <h1>Indonesian Films</h1>
                </div>
                <div className = {styles.content}>
                    {
                        MovieData && MovieData.length>0 && MovieData.map((item)=> {
                        var poster = item.poster;
                        return (
                            <div key = {item.nama} className = {styles.movieItem}>
                                <div className = {styles.movieImg}>
                                    <img src = {require(`${poster}`)}/>
                                </div>
                                <h3 className = {styles.movieTitle}>{item.nama}</h3>
                                <p className = {styles.movieDesc}>{item.desc}</p>
                                <button onClick={() => handleClick(item.nama)}>Click</button>
                            </div>
                        )})
                    }
                </div>
            </div>
            <div className={styles.containerRight}>
                <h2>Wishlist</h2>
                {
                  wishlist.map((item) =>{
                    return (
                      <p>{item}</p>
                    )
                  })
                }
            </div>
        </div>
  );
}

export default Home;