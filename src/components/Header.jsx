import React from "react";

export default function Header(props) {
  return (
    <header className="p-40">
      <div className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="">
            <h3 className="text-uppercase">Qvim Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 cu-p" onClick={props.onClickCart}>
            <img width={18} height={18} src="img/card.svg" alt="" />
            <span>1205 грн.</span>
          </li>

          <li className="header__item">
            <img width={18} height={18} src="img/user.svg" alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
}
