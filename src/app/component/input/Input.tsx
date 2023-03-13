import styles from "./input.module.sass";

export enum InputColorScheme {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export interface InputProps {
  placeholder: string;
  onClick?: () => any;
  colorScheme: InputColorScheme;
  className?: string;
  variant?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onClick,
  colorScheme,
  className,
}) => {
  return (
    <input
      className={`form-control ${styles._Button} ${
        colorScheme ? `${styles[colorScheme.toLowerCase()]}` : ""
      } ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
