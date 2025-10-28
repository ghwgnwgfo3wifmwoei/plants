import styles from "./section.module.css";

export const Section = ({
  title,
  status,
  children,
}: {
  title: string;
  status: string;
  children: React.ReactNode;
}) => (
  <div className={styles.section}>
    <h1>{title}</h1>
    <p>{status}</p>
    {children}
  </div>
);
