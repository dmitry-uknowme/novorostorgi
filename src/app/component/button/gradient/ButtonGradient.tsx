import Button, { ButtonColorScheme, ButtonProps } from "../Button";

const ButtonGradient: React.FC<Omit<ButtonProps, "colorScheme">> = (props) => {
  return <Button {...props} colorScheme={ButtonColorScheme.GRADIENT}></Button>;
};

export default ButtonGradient;
