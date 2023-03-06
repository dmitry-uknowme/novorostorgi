import Button, { ButtonColorScheme, ButtonProps } from "../Button";

const ButtonSecondary: React.FC<Omit<ButtonProps, "colorScheme">> = (props) => {
  return <Button {...props} colorScheme={ButtonColorScheme.SECONDARY} />;
};

export default ButtonSecondary;
