import React from "react";
import Image from "next/image";
import styles from "../components/Mixer.module.css";

export default function Mixer() {
  return (
    <div className={styles.mixer}>
      <Image
        src="/images/elements/mixer.svg"
        alt="Mixer with juice"
        width={240}
        height={520}
      />
      <div className={styles.insideMixer}>
        <div className={`${styles.thirdFruit} ${styles.fruitInMixer}`}>
          <Image
            src={`/images/fruits/kiwi.svg`}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className={`${styles.secondFruit} ${styles.fruitInMixer}`}>
          <Image
            src={`/images/fruits/kiwi.svg`}
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className={`${styles.firstFruit} ${styles.fruitInMixer}`}>
          <Image
            src={`/images/fruits/kiwi.svg`}
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
