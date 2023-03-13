import Button from "../../../component/button/Button";
import ButtonPrimary from "../../../component/button/primary/ButtonPrimary";
import styles from "./card.module.sass";

export interface ITenderCard {
  number: number;
  registry_number: string;
  title: string;
  status: string;
  status_localized: string;
  customer_name: string;
  //TODO:
  method: string;
  method_localized: string;
  //TODO:
  section: string;
  section_localized: string;
  price: string;
  price_localized: string;
  date_review: string;
}

interface TenderCardProps {
  tender: ITenderCard;
}

const TenderCard: React.FC<TenderCardProps> = ({ tender }) => {
  const {} = tender;
  return (
    <div className={styles._Card}>
      <div className="row">
        <div className="col-md-8">
          <div className={styles.main}>
            <div className="row mb-1">
              <div className="col-md-5">
                <div className={styles.number}>
                  № {tender.number}
                  {tender.registry_number
                    ? ` / ${tender.registry_number}`
                    : null}
                </div>
              </div>
              <div className="col-md-7">
                <div className={`${styles.row} ${styles.status}`}>
                  {/* <div className={styles.row__key}>Статус:&nbsp;</div> */}
                  <div className={`${styles.status_circle}`}></div>
                  &nbsp;&nbsp;
                  <div className={styles.row__value}>
                    {tender.status_localized}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className={`${styles.row} ${styles.title}`}>
                <div className={styles.row__key}>Наименование</div>
                <div className={styles.row__value}>{tender.title}</div>
              </div>
              <div className={`${styles.row} ${styles.customer}`}>
                <div className={styles.row__key}>Заказчик</div>
                <div className={styles.row__value}>{tender.customer_name}</div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-5">
                <div className={`${styles.row} ${styles.section}`}>
                  <div className={styles.row__key}>Секция:&nbsp;</div>
                  <div className={styles.row__value}>
                    {tender.section_localized}
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className={`${styles.row} ${styles.method}`}>
                  <div className={styles.row__key}>
                    Способ проведения:&nbsp;
                  </div>
                  <div className={styles.row__value}>
                    {tender.method_localized}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="right">
            <div className={`${styles.row} ${styles.price}`}>
              <div className={styles.row__key}>Начальная цена</div>
              <div className={styles.row__value}>{tender.price_localized}</div>
            </div>
            <div className={`${styles.row} ${styles.date_review} mt-1 mb-1`}>
              <div className={styles.row__key}>Дата окончания подачи:</div>
              <div className={styles.row__value}>{tender.date_review}</div>
            </div>
            <div className={`${styles.row} ${styles.timer}`}>
              <div className={styles.row__key}>До окончания:&nbsp;</div>
              <div className={styles.row__value}>
                01:52:03
                {/* {tender.date_review} */}
              </div>
            </div>
            <ButtonPrimary className={styles.btn} title="Перейти" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderCard;
