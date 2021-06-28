import React from "react";
import Image from "next/image";
import styles from "../components/Mixer.module.css";

export default function FruitIngredients(props) {
  return (
    <div className={styles.mixer}>
      <Image src={props.imageSource} alt="Mixer with juice" width={240} height={520} />
    </div>
  );
}
