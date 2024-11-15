import styles from "./footer.module.scss";
import Page from "../pages";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Page>
        <div className={styles["footer-container"]}>
          <span className={styles["footer-text"]}>
            © 2024 <a href='#'>Hamucomerce Membangun Indonesia</a>
          </span>
        </div>
      </Page>
    </footer>
  );
}
