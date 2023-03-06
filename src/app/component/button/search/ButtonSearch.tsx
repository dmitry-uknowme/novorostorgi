import Button, { ButtonProps } from "../Button";
import SearchIcon from "../../../../assets/icons/search.png";

const ButtonSearch: React.FC<Omit<ButtonProps, "title">> = (props) => {
  return (
    <Button
      {...props}
      title={<img src={SearchIcon} width="37px" height="37px" />}
    />
  );
};

export default ButtonSearch;
