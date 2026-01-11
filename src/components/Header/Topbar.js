"use client";

import Button from "../Button";
import styles from "./Topbar.module.css";

const Topbar = ({
  onSearch,
  onExport,
  title = "Inventory",
  addButtonText = "+ Add Item",
}) => {
  return (
    <div className={styles.topbar} suppressHydrationWarning>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.actions} suppressHydrationWarning>
        <div className={styles.searchWrapper} suppressHydrationWarning>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
            className={styles.searchInput}
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>
        <button className={styles.exportButton} onClick={onExport}>
          <span style={{ marginRight: "8px" }}>📥</span> Export
        </button>
        <Button onClick={() => {}}>{addButtonText}</Button>
      </div>
    </div>
  );
};

export default Topbar;
