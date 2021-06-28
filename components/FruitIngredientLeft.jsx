import React from "react";
import Image from "next/image";
import styles from "../components/FruitIngredientLeft.module.css";

export default function FruitIngredients(props) {
  return (
    <button className={styles.buttonFruit}>
      <span className={styles.buttonName}>{props.fruitName}</span>
      <Image src={props.imageSource} alt="" width={120} height={120} />
    </button>
  );
}
