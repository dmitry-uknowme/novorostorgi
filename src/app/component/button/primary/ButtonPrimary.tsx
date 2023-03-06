import Button, { ButtonColorScheme, ButtonProps } from "../Button";

const ButtonPrimary: React.FC<Omit<ButtonProps, "colorScheme">> = (props) => {
  return <Button {...props} colorScheme={ButtonColorScheme.PRIMARY} />;
};

export default ButtonPrimary;
