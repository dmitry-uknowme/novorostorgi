import ButtonPrimary from "../../../../component/button/primary/ButtonPrimary";
import styles from "./card.module.sass";

export interface StartCardProps {
  title: string;
  content: React.ReactNode;
}

const StartCard: React.FC<StartCardProps> = ({ title, content }) => {
  return (
    <div className={styles._Card}>
      <div>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.content}>{content}</div>
      </div>
      <ButtonPrimary className={styles.btn} title="Посмотреть тарифы" />
    </div>
  );
};

export default StartCard;
