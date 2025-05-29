import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <>
      <div className="wrapper clear">
        <Drawer />

        <Header />

        <section className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <Card />
          <div className="d-flex"></div>
        </section>
      </div>
    </>
  );
}

export default App;
