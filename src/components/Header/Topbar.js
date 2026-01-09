"use client";

import Button from "../Button";
import styles from "./Topbar.module.css";

const Topbar = ({ onSearch }) => {
  return (
    <div className={styles.topbar}>
      <h2 className={styles.title}>Inventory</h2>
      <div className={styles.actions}>
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search items..."
            className={styles.searchInput}
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>
        <button className={styles.exportButton}>
          <span style={{ marginRight: "8px" }}>📥</span> Export
        </button>
        <Button onClick={() => {}}>+ Add Item</Button>
      </div>
    </div>
  );
};

export default Topbar;
