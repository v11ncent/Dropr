import Heading from "Patterns/01_Atoms/Heading/Heading";
import CardContainer from "Patterns/03_Organisms/Card Container/CardContainer";
import Card from "Patterns/03_Organisms/Card/Card";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.container}>
      <CardContainer>
        <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
        <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
        <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
        <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
        <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
        <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
      </CardContainer>
    </main>
  );
};

export default Home;
