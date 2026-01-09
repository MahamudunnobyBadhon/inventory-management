import styles from './Pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <span className={styles.showing}>Showing <strong>1-8</strong> of <strong>248</strong> items</span>
      <div className={styles.pages}>
        <button className={styles.pageBtn}>&lt;</button>
        <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <span className={styles.dots}>...</span>
        <button className={styles.pageBtn}>31</button>
        <button className={styles.pageBtn}>&gt;</button>
      </div>
    </div>
  );
};

export default Pagination;
