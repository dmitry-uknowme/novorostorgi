import StartCard from "./card/StartCard";
import QuestionIcon from "../../../../assets/icons/question.png";
import TickIcon from "../../../../assets/icons/tick.png";
import RubleIcon from "../../../../assets/icons/ruble.png";
import styles from "./start.module.sass";

const Start = () => {
  return (
    <section className={styles._Start}>
      <div className="container">
        <h2 className="section__title">С чего начать</h2>
        <div className="offset-md-2 col-md-8 mt-5">
          <div className={`row ${styles.row}`}>
            <StartCard
              title="Поставщику"
              content={
                <>
                  <div className="d-flex align-items-top">
                    <div className="icon icon_left" style={{ width: "10%" }}>
                      <img
                        src={QuestionIcon}
                        width="15px"
                        height="24px"
                        style={{ marginTop: "5px" }}
                      />
                    </div>
                    <p style={{ width: "90%" }}>
                      Хотите участвовать в <br /> закупках или торгах?
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="icon icon_left" style={{ width: "10%" }}>
                      <img src={TickIcon} alt="" width="23px" height="17px" />
                    </div>
                    <p style={{ width: "90%" }}>Объясним и поможем!</p>
                  </div>
                </>
              }
            />
            <StartCard
              title="Заказчику"
              content={
                <div className="d-flex">
                  <div className="d-flex align-items-top">
                    <div className="icon icon_left" style={{ width: "10%" }}>
                      <img
                        src={RubleIcon}
                        width="23px"
                        height="27px"
                        style={{ marginTop: "5px" }}
                      />
                    </div>
                    <p style={{ width: "90%" }}>
                      Оптимизируйте закупочную <br />
                      деятельность с помощью ЭТП НоворосТорги
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
