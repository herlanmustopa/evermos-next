import React from "react";
import styles from "./catalog.module.scss";
import ProductList from "./catalogList";

export const metadata = {
  title: "Product Catalog",
};

export default function CatalogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.catalogTitle}>Product Catalog</h1>
      <ProductList />
    </div>
  );
}
