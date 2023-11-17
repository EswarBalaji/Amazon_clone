import React from "react";
import "./Home.css";
import Product from "./Product";
function Home(){
return (
<div className="home">
<div className="home__container">
<img className="home__image" src="https://m.media-amazon.com/images/I/61BWdGQEaDL._SX3000_.jpg" alt="bgimage"/>
<div className="home__row">
          <Product
            title="Sony PS5 PlayStation Console+God Of War Ragnarok | Standard Edition | PS5 Game (PlayStation 5)"
            price={54982}
            rating={5}
            image="https://m.media-amazon.com/images/I/61LbF7Kz57L._SX679_.jpg"
          />
          <Product
            title="Samsung Galaxy S23 Ultra 5G (Cream, 12GB, 256GB Storage) (6.8” Dynamic AMOLED 2X Infinity-O QHD+ Edge Screen. 120Hz Adaptive Refresh Rate)"
            price={124999}
            rating={4}
            image="https://m.media-amazon.com/images/I/61j99uUfXNL._SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Apple 2023 MacBook Pro Laptop M2 Max chip with 12‑core CPU and 38‑core GPU: 33.74 cm (16.2-inch), 32GB Unified Memory, 1TB SSD Storage.Space Grey"
            price={349900}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Ph34V0YAL._SX679_.jpg"
          />
          <Product
            title="Apple iPhone 14 Pro (256 GB) - Space Black (15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion)"
            price={139900}
            rating={5}
            image="https://m.media-amazon.com/images/I/61XO4bORHUL._SX679_.jpg"
          />
          <Product
            title="Apple 2022 11-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (4th Generation)"
            price={91900}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="SteelSeries New Apex Pro Mini Mechanical Gaming Keyboard World Fastest Keyboard Adjustable Actuation Compact 60% Form Factor RGB PBT Keycaps USB-C, Black"
            price={24999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71wJM4lMCJL._SX679_.jpg"
          />
        </div>
</div>
</div>
);
}
export default Home;