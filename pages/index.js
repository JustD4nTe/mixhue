import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FruitIngredients from "../components/FruitIngredient";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mixhue</title>
        <meta name="description" content="Mixhue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FruitIngredients fruitName="Pineapple" imageSource="/images/fruits/mixhue_pineapple.svg"  />
        <FruitIngredients fruitName="Berries" imageSource="/images/fruits/mixhue_berries.svg"  />
        <FruitIngredients fruitName="Kiwi" imageSource="/images/fruits/mixhue_kiwi.svg"  />
        <FruitIngredients fruitName="Strawberries" imageSource="/images/fruits/mixhue_strawberries.svg"  />
        <FruitIngredients fruitName="Orange" imageSource="/images/fruits/mixhue_orange.svg"  />
        <FruitIngredients fruitName="Raspberries" imageSource="/images/fruits/mixhue_raspberry.svg"  />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/JustD4nTe/mixhue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Github Logo" width={72} height={16} />
          </span>{" "}
          Github
        </a>
      </footer>
    </div>
  );
}
