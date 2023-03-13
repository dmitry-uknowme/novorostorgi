import styles from "./card.module.sass";

export interface IViewCardSection {
  title: string;
  values: (
    | {
        key: string;
        value: string;
        link?: string;
        isColumn?: boolean;
        isElement?: boolean;
      }
    | React.ReactNode
  )[];
}

interface ViewCardProps {
  sections: IViewCardSection[];
}

const ViewCard: React.FC<ViewCardProps> = ({ sections }) => {
  return (
    <div className="_Card">
      <div className="container">
        {sections?.map((section) => (
          <div className={styles.section}>
            <h2 className={styles.section__title}>{section.title}</h2>
            <div className="mt-2">
              {section.values
                // ?.filter((v) => Boolean(v?.value))
                .map((v) =>
                  Boolean(v?.value) ? (
                    <div className={styles.section__row}>
                      <div className={styles.section__key}>{v?.key}</div>
                      <div className={styles.section__value}>{v?.value}</div>
                    </div>
                  ) : (
                    <>{v}</>
                    // { v }
                  )
                )}
              {section.values.filter}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCard;
