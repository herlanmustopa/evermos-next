"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./catalog.module.scss";
import {fetchProducts} from "@/core/services/api.services";
import SkeletonCard from "@/components/Skeloton";

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const productsData = await fetchProducts();
      setProducts(productsData);
      setLoading(false);
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className={styles.productGrid}>
        {Array.from({length: products.length || 20}).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product: IProduct) => (
        <Link
          key={product.id}
          href={`/catalog/${product.id}`}
          className={styles.productCardLink}>
          <div className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                layout='responsive'
                className={styles.productImage}
                loading='lazy'
              />
            </div>
            <div className={styles.productInfo}>
              <h2 className={styles.productName}>{product.title}</h2>
              <div className={styles.productPrice}>
                <p className={styles.productPrice}> ${product.price}</p>
                <p className={styles.productRating}>
                  <span
                    className={`material-symbols-outlined ${styles.productRating}`}>
                    star
                  </span>
                  {product.rating.rate}
                </p>
              </div>
              {/* <button className={styles.addToCartButton}>Add to Cart</button> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
