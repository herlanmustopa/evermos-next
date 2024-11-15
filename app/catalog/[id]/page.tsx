import Image from "next/image";
import styles from "./productDetail.module.scss";
import {fetchProductById} from "@/core/services/api.services";

interface IProps {
  params: {id: string};
}

export default async function ProductDetailPage({params}: IProps) {
  const {id} = params;
  const product = await fetchProductById(id);
  console.log(id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.container}>
      <div className={styles.productGrid}>
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productDetails}>
          <h1 className={styles.productName}>{product.title}</h1>
          <p className={styles.productPrice}>${product.price}</p>
          <p className={styles.productDescription}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
