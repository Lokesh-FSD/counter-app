// Imports
import productsJSON from "./products.json";
import { Link } from "react-router-dom";
import mobile from "./banner//assets/carousel images/Room1.jpg";
import headphone from "./banner//assets/carousel images/Room2.jpg";
import book from "./banner//assets/carousel images/Room1.jpg";

// function to render the Product Items
export function Products() {
  function renderProducts() {
    if (productsJSON !== undefined) {
      return productsJSON.results.map(function (productItem) {
        return (
          <div
            key={productItem.id}
            id={productItem.id}
            className="col-md-6 col-sm-15"
          >
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to={`/data/${productItem.id}`}
            >
              <div className="card ">
                <img src={productItem.image} alt={productItem.name}></img>
                <div className="card-body">
                  <h5 className="card-title">{productItem.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        );
      });
    }
  }
  return (
    <div>
      <section className="banner ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-interval="0.3"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
            />
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
            />
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
            />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={headphone} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={book} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={mobile} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </section>

      <div className="row">{renderProducts()}</div>
    </div>
  );
}
