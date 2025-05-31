import React from "react";

export default function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>

        <div className="items">
          {items.map((item) => {
            return (
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20">
                  <p className="mb-5">{item.name}</p>
                  <b>{item.price} грн.</b>
                </div>
                <img
                  className="removeBtn"
                  src="/img/btn-remove.svg"
                  alt="remove"
                />
              </div>
            );
          })}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 грн.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 грн.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
