import React from "react";
import styles from "./home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.videoThumbnail}>
          <button className={styles.playButton}>▶ Watch Video</button>
          <img
            src='https://via.placeholder.com/600x350'
            alt='Video Thumbnail'
          />
        </div>
        <div className={styles.heroText}>
          <h1>
            Consistently <span className={styles.highlight}>Delicious</span>{" "}
            Cakes, Freshly Prepared!
          </h1>
          <p>
            Life is short, eat cake first! At our bakery, every treat is crafted
            to taste the magic in every bite. Come indulge with us and sweeten
            up your life, one cake at a time!
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.readMoreButton}>Read More</button>
            <button className={styles.orderNowButton}>Order Now</button>
          </div>
        </div>
      </section>

      {/* Special Dishes Section */}
      <section className={styles.specialDishes}>
        <h2>Special Dishes</h2>
        <h3>Standout Dishes From Our Menu</h3>
        <div className={styles.dishCards}>
          <div className={styles.dishCard}>
            <img
              src='https://via.placeholder.com/100'
              alt='Strawberry Milkshake'
            />
            <h4>Strawberry Milkshake</h4>
            <p>Description of the item</p>
            <div className={styles.dishPrice}>$18.00</div>
          </div>
          <div className={styles.dishCard}>
            <img
              src='https://via.placeholder.com/100'
              alt='Delicious Fat With Cheese'
            />
            <h4>Delicious Fat With Cheese</h4>
            <p>Description of the item</p>
            <div className={styles.dishPrice}>$16.00</div>
          </div>
          <div className={styles.dishCard}>
            <img
              src='https://via.placeholder.com/100'
              alt='Delicious Little Biscuits'
            />
            <h4>Delicious Little Biscuits</h4>
            <p>Description of the item</p>
            <div className={styles.dishPrice}>$20.00</div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className={styles.popularCategories}>
        <h2>Popular Categories</h2>
        <div className={styles.categories}>
          <div className={styles.categoryCard}>
            <h4>Fast Food</h4>
            <p>(72 dishes)</p>
          </div>
          <div className={styles.categoryCard}>
            <h4>Breakfast</h4>
            <p>(15 dishes)</p>
          </div>
          <div className={styles.categoryCard}>
            <h4>Dessert</h4>
            <p>(46 desserts)</p>
          </div>
          <div className={styles.categoryCard}>
            <h4>Browse All</h4>
            <p>(190 items)</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
