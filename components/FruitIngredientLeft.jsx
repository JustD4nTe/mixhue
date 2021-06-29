import React from "react";
import Image from "next/image";
import styles from "../styles/FruitIngredient.module.css";
import stylesIngredient from "../components/FruitIngredientLeft.module.css";

export default function FruitIngredientsLeft(props) {
  return (
    <button
      className={`${styles.buttonFruit} ${stylesIngredient.buttonFruit}`}
      onClick={() => props.addFruit(props.fruitName)}
    >
      <span className={`${styles.buttonName} ${stylesIngredient.buttonName}`}>
        {props.fruitName}
      </span>
      <Image
        src={`/images/fruits/${props.fruitName}.svg`}
        alt=""
        width={120}
        height={120}
      />
    </button>
  );
}
