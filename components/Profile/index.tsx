import React from "react";
import Link from "next/link";
import styles from "./profile.module.scss";

function ProfileDropdown() {
  return (
    <div className={styles.profileDropdown}>
      <Link href='/profile'>
        <div className={styles.dropdownItem}>Profile</div>
      </Link>
      <Link href='/settings'>
        <div className={styles.dropdownItem}>Settings</div>
      </Link>
      <div className={styles.dropdownItem}>Logout</div>
    </div>
  );
}

export default ProfileDropdown;
