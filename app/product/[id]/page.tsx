import Image from "next/image";
import styles from "../../../styles/productDetail.module.scss";
import {fetchProductById} from "@/core/services/api.services";

type ProductDetailPageProps = {
  params: {id: number};
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  //   console.log("Productss", id);
  const {id} = await params;
  const product = await fetchProductById(id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.container}>
      <div className={styles.productGrid}>
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productDetails}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productPrice}>${product.price}</p>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.variants}>
            <h2>Variants</h2>
            <div className={styles.variantList}>
              {product?.map((variant: string) => (
                <button key={variant} className={styles.variantButton}>
                  {variant}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
