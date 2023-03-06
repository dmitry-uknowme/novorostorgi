import { ButtonColorScheme } from "../../../component/button/Button";
import ButtonSearch from "../../../component/button/search/ButtonSearch";
import styles from "./slider.module.sass";

const Slider = () => {
  return (
    <section className={styles._Slider}>
      {/* <div
        className="container container-fluid w-100 h-100"
        style={{ position: "relative" }}
      > */}
      <h1 className={`text-neon ${styles.title}`}>
        <span>Площадка</span> для <br />
        проведения <br />{" "}
        <span>
          эффективных
          <br />
          закупок
        </span>
      </h1>
      <div className={styles.map}></div>
      <div className={styles.search}>
        <input
          className={`form-control ${styles.search__input} h-100`}
          placeholder="Введите название закупки"
        />
        <ButtonSearch
          className={styles.search__btn}
          colorScheme={ButtonColorScheme.SECONDARY}
        />
      </div>
      {/* </div> */}
    </section>
  );
};

export default Slider;
