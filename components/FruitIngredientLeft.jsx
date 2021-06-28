import React from "react";
import Image from "next/image";
import styles from "../styles/FruitIngredient.module.css";
import stylesIngredient from "../components/FruitIngredientLeft.module.css";

export default function FruitIngredients(props) {
  return (
    <button className={`${styles.buttonFruit} ${stylesIngredient.buttonFruit}`}>
      <span className={styles.buttonName}>{props.fruitName}</span>
      <Image src={props.imageSource} alt="" width={120} height={120} />
    </button>
  );
}
