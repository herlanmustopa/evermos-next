"use client";
// Navbar.tsx
import React, {useState} from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import ProfileDropdown from "../Profile";
import Image from "next/image";

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMouseEnter = () => setIsProfileOpen(true);
  const handleMouseLeave = () => setIsProfileOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <img src='https://placehold.co/100x40?text=Logo' alt='Logo' />
          </Link>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/catalog'>Catalog</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div
          className={styles.avatarWrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <Image
            src='https://randomuser.me/api/portraits/men/1.jpg'
            alt='User Avatar'
            className={styles.avatar}
            width={40}
            height={40}
          />
          {isProfileOpen && <ProfileDropdown />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
