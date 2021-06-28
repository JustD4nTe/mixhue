import React from "react";
import Image from "next/image";
import styles from "../styles/FruitIngredient.module.css";
import stylesIngredient from "../components/FruitIngredientRight.module.css";

export default function FruitIngredients(props) {
  return (
    <button className={`${styles.buttonFruit} ${stylesIngredient.buttonFruit}`}
    >
      <Image src={props.imageSource} alt="" width={120} height={120} />
      <span className={styles.buttonName}>{props.fruitName}</span>
    </button>
  );
}
