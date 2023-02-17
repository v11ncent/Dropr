import Heading from "Patterns/01_Atoms/Heading";
import HeroDescription from "Patterns/01_Atoms/Paragraph";
import Button from "Patterns/01_Atoms/Button";
import styles from "Styles/Components/SectionText.module.scss";

const SectionText = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Heading level={1} text={"Go from zero to 1$"} size="large" />
        <HeroDescription text={props.description} />
        <Button text={props.cta} size="large" />
      </div>
    </div>
  );
};

export default SectionText;
