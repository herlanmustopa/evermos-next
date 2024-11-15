import styles from "./skeloton.module.scss";
export default function SkeletonCard() {
  return (
    <div className={styles.productCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.productInfo}>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
  );
}
