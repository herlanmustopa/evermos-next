import React from "react";
import styles from "./page.module.scss";

interface IPage {
  children: React.ReactNode;
  className?: string;
}

export default function Page({children, className}: IPage) {
  return <div className={`${styles.page} ${className || ""}`}>{children}</div>;
}
