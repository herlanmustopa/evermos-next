import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div id='footer' className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div>
            <p className={styles.logo}>Hamucomerce</p>
            <p className={styles.address}>
              Jl. Ir. H. Juanda No.95, Lb. Siliwangi, Kecamatan Coblong, Kota
              Bandung, Jawa Barat 40132
            </p>
          </div>
          <div className={styles.contactLinks}>
            <a
              // key={i}
              target='_blank'
              rel='noopener noreferrer'
              // href={item?.localization[lang]?.kontak}
              className={styles.contactLink}>
              <button className={styles.iconButton}>
                <img
                  width='15'
                  height='15'
                  // src={item?.localization[lang]?.link_logo}
                  // alt={item?.localization[lang]?.nama}
                />
              </button>
              {/* {item?.localization[lang]?.nama} */}
            </a>
          </div>
          <div className={styles.socialIcons}>
            <a target='_blank' rel='noopener noreferrer'>
              <button className={styles.iconButton}>
                <img
                  // src={logo?.localization[lang]?.instagram.image}
                  alt='Instagram OSS'
                />
              </button>
            </a>
            <a target='_blank' rel='noopener noreferrer'>
              <button className={styles.iconButton}>
                <img
                  // src={logo?.localization[lang]?.facebook.image}
                  alt='Facebook OSS'
                />
              </button>
            </a>
            <a target='_blank' rel='noopener noreferrer'>
              <button className={styles.iconButton}>
                <img
                  // src={logo?.localization[lang]?.youtube.image}
                  alt='YouTube OSS'
                />
              </button>
            </a>
            <a target='_blank' rel='noopener noreferrer'>
              <button className={styles.iconButton}>
                <img
                  // src={logo?.localization[lang]?.twitter.image}
                  alt='Twitter OSS'
                />
              </button>
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h6 className={styles.title}>Fitur & Layanan</h6>
          <ul className={styles.linkList}>
            <li>
              <Link href='/pengaduan'>Pengaduan Masyarakat</Link>
            </li>
            <li>
              <Link href='/lapor'>Lapor</Link>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h6 className={styles.title}>Informasi</h6>
          <ul className={styles.linkList}>
            <li>
              <Link href='/panduan'>Panduan</Link>
            </li>
            <li>
              <Link href='/kbli'>KBLI</Link>
            </li>
            <li>
              <Link href='/persyaratan'>Persyaratan Dasar</Link>
            </li>
            <li>
              <Link href='/pengumuman'>Pengumuman</Link>
            </li>
            <li>
              <Link href='/berita'>Berita</Link>
            </li>
            <li>
              <Link href='/faq'>FAQ</Link>
            </li>
            <li>
              <Link href='/privacy-policy'>Kebijakan Privasi</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © 2024 by Hamucomerce. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
