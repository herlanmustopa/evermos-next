import Image from "next/image";
import styles from "../../../styles/productDetail.module.scss";
import {fetchProductById} from "@/core/services/api.services";

type Props = {
  params: {
    id: number;
  };
};

export default async function ProductDetailPage({params: {id}}: Props) {
  console.log("Productss", id);
  const product = await fetchProductById(id);

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
          <div className={styles.variants}>
            <h2>Variants</h2>
            <div className={styles.variantList}>
              {/* {product?.map((variant: string) => (
                <button key={variant} className={styles.variantButton}>
                  {variant}
                </button>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
