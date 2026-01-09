"use client";

import styles from "./FilterBar.module.css";

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filters}>
        <span className={styles.label}>Filters:</span>
        <button className={`${styles.filterChip} ${styles.filterChipActive}`}>
          All Locations <span className={styles.close}>×</span>
        </button>
        <button className={`${styles.filterChip} ${styles.filterChipActive}`}>
          In Stock <span className={styles.close}>×</span>
        </button>
        <button className={styles.addFilter}>+ Add Filter</button>
      </div>
      <div className={styles.stats}>
        <span className={styles.itemCount}>248 items</span>
        <button className={styles.sortButton}>⇅ Sort: Updated</button>
      </div>
    </div>
  );
};

export default FilterBar;
