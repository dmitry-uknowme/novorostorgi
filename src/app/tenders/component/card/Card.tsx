import styles from "./card.module.sass";

export interface ITenderCard {
  number: number;
  registry_number: string;
  title: string;
  status: string;
  customer_name: string;
  //TODO:
  method: string;
  method_localized: string;
  //TODO:
  section: string;
  section_localized: string;
  price: string;
  price_localized: string;
  review_date: string;
}

interface TenderCardProps {
  tender: ITenderCard;
}

const TenderCard: React.FC<TenderCardProps> = ({ tender }) => {
  const {} = tender;
  return (
    <div className="_Card">
      <div className="row">
        <div className="col-md-7">
          <div className="main">
            <div className="col-md-5">
              <div className="number">
                № {tender.number}
                {tender.registry_number ? ` / ${tender.registry_number}` : null}
              </div>
              <div className={`title ${styles.row}`}>
                <div className="row__key">Наименование</div>
                <div className="row__value">{tender.title}</div>
              </div>
              <div className={`${styles.row} customer`}>
                <div className="row__key">Заказчик</div>
                <div className="row__value">
                  АКЦИОНЕРНОЕ ОБЩЕСТВО "КОРПОРАЦИЯ РАЗВИТИЯ"
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className={styles.row}>
                    <div className="row__key">Секция:</div>
                    <div className="row__value">{tender.section_localized}</div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className={styles.row}>
                    <div className="row__key">Способ проведения:</div>
                    <div className="row__value">{tender.method_localized}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="right">
            <div className={styles.row}>
              <div className="row__key">Начальная цена</div>
              <div className="row__value"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderCard;
