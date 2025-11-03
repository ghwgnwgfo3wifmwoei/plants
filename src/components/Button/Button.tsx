import styles from "./button.module.css";

export const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.regularButton} ${disabled ? styles.disabled : null}`}
    >
      {children}
    </button>
  );
};

export const IconButton = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.iconButton} ${disabled ? styles.disabled : null}`}
    >
      {children}
    </button>
  );
};
