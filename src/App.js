// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="teaMenu">
        <header>
          <h1 className="animate__animated animate__backInLeft">RL Teashop</h1>
          <p className="established">Service since 2022</p>
        </header>
        <hr className="top-line" />
        <main>
          <section>
            <h2>Tea</h2>
            <article className="teaItem">
              <p className="teaFlavor">Aloe Tea</p>
              <p className="teaPrice">&#x20B1; 82.00</p>
            </article>
            <article className="teaItem">
              <p className="teaFlavor">Apply Flower Tea</p>
              <p className="teaPrice">&#x20B1; 77.00</p>
            </article>
            <article className="teaItem">
              <p className="teaFlavor">Assam Black Tea</p>
              <p className="teaPrice">&#x20B1; 110.00</p>
            </article>
            <article className="teaItem">
              <p className="teaFlavor">Broken Orange Pekoe</p>
              <p className="teaPrice">&#x20B1; 83.00</p>
            </article>
            <article className="teaItem">
              <p className="teaFlavor">Bitter Buckwheat Tea</p>
              <p className="teaPrice">&#x20B1; 109.00</p>
            </article>
          </section>

          <section>
            <h2>Tea Collection</h2>
            <article className="teaItem">
              <p className="teaCollection">Black Tea</p>
              <p className="collectionPrice">&#x20B1; 221</p>
            </article>
            <article className="teaItem">
              <p className="teaCollection">Green Tea</p>
              <p className="collectionPrice">&#x20B1; 96</p>
            </article>
            <article className="teaItem">
              <p className="teaCollection">Oolong Tea</p>
              <p className="collectionPrice">&#x20B1; 120</p>
            </article>
            <article className="teaItem">
              <p className="teaCollection">Puerh Tea</p>
              <p className="collectionPrice">&#x20B1; 130</p>
            </article>
          </section>
          <hr className="bottom-line" />
          <footer>
            <p>
              <a href="#">Visit our website</a>
            </p>
            <p>0001 Marilao, Bulacan</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
