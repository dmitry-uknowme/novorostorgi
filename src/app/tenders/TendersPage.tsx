import MainTemplate from "../MainTemplate";
import TenderCard, { ITenderCard } from "./component/card/Card";

const tenders: ITenderCard[] = [
  {
    customer_name: 'АКЦИОНЕРНОЕ ОБЩЕСТВО "КОРПОРАЦИЯ РАЗВИТИЯ"',
    method: "method",
    method_localized: "Конкурентный отбор",
    number: 150,
    price: "price",
    price_localized: "2 600,89",
    registry_number: "3214214124",
    date_review: "2023 08-09-2022",
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
        <div className="col-md-8">
          {tenders.map((tender) => (
            <TenderCard tender={tender} />
          ))}
        </div>
      </div>
    </MainTemplate>
  );
};

export default TendersPage;
