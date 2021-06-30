import React from "react";
import Image from "next/image";
import styles from "../components/Mixer.module.css";
import { useSpring, animated } from "react-spring";

export default function Mixer(props) {
  const shakeStyle = useSpring({
    from: {
      rotateZ: 0,
    },
    to: [
      { rotateZ: -15 },
      { rotateZ: 15 },
      { rotateZ: -15 },
      { rotateZ: 15 },
      { rotateZ: -15 },
      { rotateZ: 15 },
      { rotateZ: -15 },
      { rotateZ: 15 },
      { rotateZ: 0 },
    ],
  });

  return (
    <animated.div
      className={styles.mixer}
      style={props.shakeMixer ? shakeStyle : null}
    >
      <Image
        src="/images/elements/mixer.svg"
        alt="Mixer with juice"
        width={240}
        height={520}
      />
      <div className={styles.fluidContainer}>
        {props.fluidColor && (
          <div
            className={styles.fluid}
            style={{ backgroundColor: `${props.fluidColor}` }}
          />
        )}
      </div>
      <div className={styles.insideMixer}>
        <div className={`${styles.thirdFruit} ${styles.fruitInMixer}`}>
          {props.fruitsInMixer[2] && (
            <Image
              src={`/images/fruits/${props.fruitsInMixer[2]}.svg`}
              alt={`${props.fruitsInMixer[2]} in mixer`}
              width={100}
              height={100}
            />
          )}
        </div>
        <div className={`${styles.secondFruit} ${styles.fruitInMixer}`}>
          {props.fruitsInMixer[1] && (
            <Image
              src={`/images/fruits/${props.fruitsInMixer[1]}.svg`}
              alt={`${props.fruitsInMixer[1]} in mixer`}
              width={100}
              height={100}
            />
          )}
        </div>

        <div className={`${styles.firstFruit} ${styles.fruitInMixer}`}>
          {props.fruitsInMixer[0] && (
            <Image
              src={`/images/fruits/${props.fruitsInMixer[0]}.svg`}
              alt={`${props.fruitsInMixer[0]} in mixer`}
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </animated.div>
  );
}
