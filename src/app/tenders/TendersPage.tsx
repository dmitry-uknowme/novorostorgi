import MainTemplate from "../MainTemplate";
import TenderCard, { ITenderCard } from "./component/card/Card";
import TendersSearch from "./component/search/Search";

const tenders: ITenderCard[] = [
  {
    customer_name: 'АКЦИОНЕРНОЕ ОБЩЕСТВО "КОРПОРАЦИЯ РАЗВИТИЯ"',
    method: "method",
    method_localized: "Конкурентный отбор",
    number: 150,
    price: "price",
    price_localized: "2 600 841,50 ₽",
    registry_number: "3214214124",
    date_review: "08-03-2023 17:00",
    section: "section",
    section_localized: "223-ФЗ",
    status: "STATUS",
    status_localized: "Идет прием заявок",
    title: "Поставка рака для варки пива",
  },
];

const TendersPage = () => {
  return (
    <MainTemplate>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <TendersSearch />
            {tenders.map((tender) => (
              <>
                <div className="mt-4">
                  <TenderCard tender={tender} />
                </div>
                <div className="mt-4">
                  <TenderCard tender={tender} />
                </div>
                <div className="mt-4">
                  <TenderCard tender={tender} />
                </div>
                <div className="mt-4">
                  <TenderCard tender={tender} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default TendersPage;
