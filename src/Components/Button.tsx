import styles from "./button.module.css";

export const Button = ({ value }: { value: string }) => {
  return <button className={`${styles.regularButton}`}>{value}</button>;
};

export const IconButton = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles.iconButton}>{children}</button>;
};
