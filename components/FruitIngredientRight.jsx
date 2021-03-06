import React from "react";
import Image from "next/image";
import styles from "../styles/FruitIngredient.module.css";
import stylesIngredient from "../components/FruitIngredientRight.module.css";

export default function FruitIngredientsRight(props) {
  return (
    <button
      className={`${styles.buttonFruit} ${stylesIngredient.buttonFruit}`}
      onClick={() => props.addFruit(props.fruitName)}
    >
      <Image
        src={`/images/fruits/${props.fruitName}.svg`}
        alt=""
        width={120}
        height={120}
      />
      <span className={`${styles.buttonName} ${stylesIngredient.buttonName}`}>
        {props.fruitName}
      </span>
    </button>
  );
}
