import React, { useEffect } from "react";

import { IcRoundMenu } from "../../utility/Icons";
import styles from "./Navbar.module.css";
export function Navbar(props) {
  const { isOpen, setIsOpen } = props;
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger_menu} onClick={() => setIsOpen(!isOpen)}>
        <IcRoundMenu />
      </div>
      <div>
        <h1 className={styles.brand_name}>Atrina</h1>
      </div>
    </nav>
  );
}
