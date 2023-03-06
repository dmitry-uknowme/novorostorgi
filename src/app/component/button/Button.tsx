import styles from "./button.module.sass";

export enum ButtonColorScheme {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  GRADIENT = "GRADIENT",
}

export interface ButtonProps {
  title: string | React.ReactNode;
  onClick?: () => any;
  colorScheme: ButtonColorScheme;
  className?: string;
  type?: "ICON_SEARCH";
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  colorScheme,
  className,
}) => {
  return (
    <button
      className={`btn ${styles._Button} ${
        colorScheme ? `${styles[colorScheme.toLowerCase()]}` : ""
      } ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
