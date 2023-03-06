import ServiceCard from "./card/ServiceCard";
import styles from "./services.module.sass";
import ServiceSignIcon from "../../../../assets/icons/service/sign.png";
import ServiceTenderLearnIcon from "../../../../assets/icons/service/tender_learn.png";
import ServiceTenderSupportIcon from "../../../../assets/icons/service/tender_support.png";

const Services = () => {
  return (
    <section className={styles._Services}>
      <div className="container">
        <h2 className="section__title">Услуги и сервисы</h2>
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-md-4">
            <ServiceCard
              title={
                <span>
                  Электронная
                  <br /> подпись
                </span>
              }
              icon={ServiceSignIcon}
              iconStyle={{ width: "64px", height: "64px" }}
            />
          </div>
          <div className="col-md-4">
            <ServiceCard
              title={
                <span>
                  Обучение
                  <br /> по торгам
                </span>
              }
              icon={ServiceTenderLearnIcon}
              iconStyle={{ width: "64px", height: "64px" }}
            />
          </div>
          <div className="col-md-4">
            <ServiceCard
              title={
                <span>
                  Тендерное
                  <br /> сопровождение
                </span>
              }
              icon={ServiceTenderSupportIcon}
              iconStyle={{ width: "64px", height: "64px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
