import ViewCard, { IViewCardSection } from "../component/view/card/Card";
import MainTemplate from "../MainTemplate";
import styles from "../component/view/card/card.module.sass";

const sections: IViewCardSection[] = [
  {
    title: "Сведения о закупке",
    values: [
      { key: "Реестровый номер извещения", value: "13212312123" },
      {
        key: "Способ осуществления закупки",
        value:
          "Аукцион в электронной форме, участниками которого могут быть только субъекты малого и среднего предпринимательства",
      },
      {
        key: "Наименование закупки",
        value:
          "Оказание авиационных услуг для мониторинга пожарной опасности в лесах и лесных пожаров, а также тушения лесных, тундровых пожаров на территории Чукотского автономного округа в 2023 году",
      },
      {
        key: "Редакция",
        value: "№1",
      },
      {
        key: "Дата размещения извещения",
        value: "01.02.2023",
      },
      {
        key: "Дата размещения текущей редакции извещения",
        value: "01.02.2023",
      },
      {
        key: "Дата размещения текущей редакции извещения",
        value: "01.02.2023",
      },
    ],
  },
  {
    title: "Сведения о заказчике",
    values: [
      {
        key: "Наименование организации",
        value:
          'ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ ЧУКОТСКОГО АВТОНОМНОГО ОКРУГА "БАЗА АВИАЦИОННОЙ ОХРАНЫ ЛЕСОВ"',
      },
      {
        key: "Наименование организации",
        value:
          'ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ ЧУКОТСКОГО АВТОНОМНОГО ОКРУГА "БАЗА АВИАЦИОННОЙ ОХРАНЫ ЛЕСОВ"',
      },

      <>
        <div className="d-flex">
          <div className={styles.section__row}>
            <div className={styles.section__key}>ИНН</div>
            <div className={styles.section__value}>8709014858</div>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className={styles.section__row}>
            <div className={styles.section__key}>КПП</div>
            <div className={styles.section__value}>870901001</div>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className={styles.section__row}>
            <div className={styles.section__key}>ОГРН</div>
            <div className={styles.section__value}>1148709000110</div>
          </div>
        </div>
      </>,
      {
        key: "Место нахождения",
        value: "689000, Чукотский АО, г Анадырь, ул Берзиня, дом 22, корпус а",
      },
      {
        key: "Почтовый адрес",
        value: "689000, Чукотский АО, г Анадырь, ул Берзиня, дом 22, корпус а",
      },
      <>
        <div className="d-flex">
          <div className={styles.section__row}>
            <div className={styles.section__key}>Контактное лицо</div>
            <div className={styles.section__value}>
              Кузнецов Александр Николаевич
            </div>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className={styles.section__row}>
            <div className={styles.section__key}>Адрес электронной почты</div>
            <div className={styles.section__value}>aviabaza@anadyr.ru</div>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className={styles.section__row}>
            <div className={styles.section__key}>Контактный телефон</div>
          </div>
          <div className={styles.section__value}>42722 26421</div>
        </div>
      </>,
    ],
  },
];

const TenderPage = () => {
  return (
    <MainTemplate>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ViewCard sections={sections} />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default TenderPage;
