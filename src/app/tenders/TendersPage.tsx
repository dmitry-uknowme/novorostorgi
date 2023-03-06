import MainTemplate from "../MainTemplate";
import TenderCard, { ITenderCard } from "./component/card/Card";

const tenders: ITenderCard[] = [
  {
    customer_name: "test",
    method: "method",
    method_localized: "Конкурентный отбор",
    number: 150,
    price: "price",
    price_localized: "price",
    registry_number: "3214214124",
    review_date: "111",
    section: "section",
    section_localized: "223-ФЗ",
    status: "STATUS",
    title: "Поставка котла для варки пива",
  },
];

const TendersPage = () => {
  return (
    <MainTemplate>
      <div className="col-md-8 offset-md-2">
        {tenders.map((tender) => (
          <TenderCard tender={tender} />
        ))}
      </div>
    </MainTemplate>
  );
};

export default TendersPage;
