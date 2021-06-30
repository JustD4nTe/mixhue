import React from "react";
import styles from "../components/ButtonMix.module.css";

export default function ButtonMix(props) {
  return (
    <button className={styles.buttonMix} onClick={props.changeFluidColor}>
      MIX
    </button>
  );
}
