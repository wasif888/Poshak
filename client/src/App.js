import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Poshak</a>
      </header>
      <main>
        <h1>Featured products</h1>
        <div className="products">
          {data.products.map((products) => (
            <div key={products.slugS} className="product">
              <img src={products.image} alt={products.name} />
              <div className="product-info">
                <p>{products.name}</p>
                <p>{products.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
