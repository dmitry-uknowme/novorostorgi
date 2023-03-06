import SectionCard from "./card/SectionCard";
import styles from "./sections.module.sass";
import SectionComIcon from "../../../../assets/icons/section/commercial.png";
import Section223Icon from "../../../../assets/icons/section/fz223.png";

const Sections = () => {
  return (
    <section className={styles._Sections}>
      <div className="container">
        <h2 className="section__title">Секции размещения</h2>
        <div className="row mt-5">
          <div className="col-md-5 offset-md-1">
            <SectionCard
              name="commercial"
              title="Коммерческие закупки"
              desc={
                <span>
                  Проведение закупочных процедур для нужд коммерческих
                  предприятий
                </span>
              }
              button_title={"Искать торги"}
              icon={SectionComIcon}
            />
          </div>
          <div className="col-md-5 offset-md-1">
            <SectionCard
              name="fz223"
              title="Торги по 223-ФЗ"
              desc={
                <span>Закупки государственных и муниципальных организаций</span>
              }
              button_title={"Искать торги"}
              icon={Section223Icon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
