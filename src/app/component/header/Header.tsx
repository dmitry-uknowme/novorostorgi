import styles from "./header.module.sass";
import Logo from "../../../assets/logo.png";
import Button, { ButtonColorScheme } from "../button/Button";
import ButtonGradient from "../button/gradient/ButtonGradient";

const Header = () => {
  return (
    <header className="_Header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img className={styles.logo} src={Logo} alt="НоворосТорги" />
          </div>
          <div className="col-md-5">
            <ul className={styles.nav__list} role="navigation">
              <li className={styles.nav__item}>Закупки</li>
              <li className={styles.nav__item}>Тарифы</li>
              <li className={styles.nav__item}>О площадке</li>
              <li className={styles.nav__item}>Помощь</li>
            </ul>
          </div>
          <div className="col-md-3 offset-md-1">
            <ButtonGradient
              title="Вход в личный кабинет"
              className={styles.button_auth}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
