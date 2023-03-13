import { ButtonColorScheme } from "../../../component/button/Button";
import ButtonSearch from "../../../component/button/search/ButtonSearch";
import Input, { InputColorScheme } from "../../../component/input/Input";
import styles from "./search.module.sass";

const TendersSearch = () => {
  return (
    <div className={styles._Search}>
      <Input
        className={styles.input}
        placeholder="Введите название закупки"
        colorScheme={InputColorScheme.PRIMARY}
      />
      <ButtonSearch
        className={styles.btn}
        colorScheme={ButtonColorScheme.SECONDARY}
      />
    </div>
  );
};

export default TendersSearch;
