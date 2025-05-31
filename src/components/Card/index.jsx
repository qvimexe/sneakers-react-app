import React from "react";
import styles from "./Card.module.scss";

export default function Card({ onFavorite, image, title, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, image, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={image} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          onClick={onClickPlus}
          width={30}
          height={30}
          alt="Plus"
        />
      </div>
    </div>
  );
}
