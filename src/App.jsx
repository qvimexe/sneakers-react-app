function App() {
  return (
    <>
      <div className="wrapper clear">
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
              <li className="mr-30">
                <img width={18} height={18} src="img/card.svg" alt="" />
                <span>1205 грн.</span>
              </li>

              <li className="header__item">
                <img width={18} height={18} src="img/user.svg" alt="" />
              </li>
            </ul>
          </div>
        </header>

        <section className="content p-40">
          <h1 className="mb-40">Все кроссовки</h1>

          <div className="d-flex">
            <div className="card">
              <img
                width={133}
                height={112}
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 грн.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" width={11} height={11} alt="" />
                </button>
              </div>
            </div>

            <div className="card">
              <img
                width={133}
                height={112}
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 грн.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" width={11} height={11} alt="" />
                </button>
              </div>
            </div>

            <div className="card">
              <img
                width={133}
                height={112}
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 грн.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" width={11} height={11} alt="" />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                width={133}
                height={112}
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 грн.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" width={11} height={11} alt="" />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                width={133}
                height={112}
                src="/img/sneakers/2.jpg"
                alt="Sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 грн.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" width={11} height={11} alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
