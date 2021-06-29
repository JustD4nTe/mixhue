import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FruitIngredientLeft from "../components/FruitIngredientLeft";
import FruitIngredientRight from "../components/FruitIngredientRight";
import Mixer from "../components/Mixer";
import ButtonMix from "../components/ButtonMix";
import React from 'react'

export default function Home() {
  const [fruitsInMixer, setFruitsInMixer] = React.useState([]);
  
  var addFruit = (newFruit) => setFruitsInMixer([...fruitsInMixer, newFruit]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mixhue</title>
        <meta name="description" content="Mixhue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mix your ingredients</h1>
        <div className={styles.mix}>
          <div className={styles.ingredients}>
            <FruitIngredientLeft fruitName="pineapple" addFruit={addFruit} />
            <FruitIngredientLeft fruitName="berries" addFruit={addFruit} />
            <FruitIngredientLeft fruitName="kiwi" addFruit={addFruit} />
          </div>
          <Mixer fruitsInMixer={fruitsInMixer}/>
          <div className={styles.ingredients}>
            <FruitIngredientRight
              fruitName="strawberries"
              addFruit={addFruit}
            />
            <FruitIngredientRight fruitName="orange" addFruit={addFruit} />
            <FruitIngredientRight fruitName="raspberries" addFruit={addFruit} />
          </div>
        </div>
        <ButtonMix />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/JustD4nTe/mixhue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.github}>
            <Image
              src="/github_logo.png"
              alt="Github Logo"
              width={20}
              height={20}
            />
            <span className={styles.githubName}>Github</span>
          </span>
        </a>
      </footer>
    </div>
  );
}
