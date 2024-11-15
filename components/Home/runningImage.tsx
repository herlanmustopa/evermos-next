import Image from "next/image";
import styles from "./running.module.scss";

interface IRunningImage {
  data: {image: string; title: string}[];
}

export function TautanTerkait({data}: IRunningImage) {
  if (!data || data.length === 0) {
    return (
      <div className={styles.tautanTerkait}>
        <p>No related links available at the moment.</p>
      </div>
    );
  }

  const duplicatedData = [...data, ...data];

  return (
    <div className={styles.tautanTerkait}>
      <section aria-labelledby='section-1-title'>
        <div className={styles.content}>
          <div className={styles.marquee}>
            <div className={styles["marquee__content"]}>
              {duplicatedData.map((item, i) => (
                <div key={i} className={styles.categoryCard}>
                  <Image
                    src={item.image || "/placeholder.png"}
                    alt={item.title || "Untitled"}
                    width={50}
                    height={50}
                    layout='responsive'
                    className={styles.productImage}
                    loading='lazy'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
