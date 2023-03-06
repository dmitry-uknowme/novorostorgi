import styles from "./card.module.sass";
import ButtonPrimary from "../../../../component/button/primary/ButtonPrimary";

interface SectionCardProps {
  name: string;
  icon: string;
  title: string;
  desc: string | React.ReactNode;
  button_title: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  name,
  title,
  icon,
  desc,
  button_title,
}) => {
  return (
    <div className={styles._Card}>
      <div className="row">
        <div className="col-md-2">
          <img className={styles.icon} src={icon} alt={title} />
        </div>
        <div className="col-md-10 d-flex flex-column">
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
          <ButtonPrimary className={styles.btn} title={button_title} />
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
