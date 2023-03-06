import styles from "./card.module.sass";
import ButtonPrimary from "../../../../component/button/primary/ButtonPrimary";
import ButtonSecondary from "../../../../component/button/secondary/ButtonSecondary";

interface ServiceCardProps {
  icon: string;
  title: string | React.ReactNode;
  iconStyle?: React.CSSProperties;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  iconStyle,
}) => {
  return (
    <div className={styles._Card}>
      <div className="row h-100 w-100">
        <div className="col-md-3">
          <img style={iconStyle} src={icon} alt={title?.toString()} />
        </div>
        <div className="col-md-9">
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
      <div className="d-flex">
        <ButtonSecondary className={styles.btn} title="Подробнее" />
      </div>
    </div>
  );
};

export default ServiceCard;
