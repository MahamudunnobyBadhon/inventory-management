import styles from './Input.module.css';

const Input = ({ label, type = 'text', placeholder, icon, id }) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          id={id}
          type={type}
          className={styles.input}
          placeholder={placeholder}
        />
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
    </div>
  );
};

export default Input;
