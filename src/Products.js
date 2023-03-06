import { AddCartbutton } from "./AddCartbutton";
import { ViewOptionsButton } from "./ViewOptionsButton";

export function Products({ data, cart_value, setCartValue }) {
  const sale_badge_style = { top: "0.5rem", right: "0.5rem" };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {data.sale_badge ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={sale_badge_style}
          >
            Sale
          </div>
        ) : (
          ""
        )}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.name}</h5>
            {data.rating ? (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
            ) : (
              ""
            )}
            {data.striked_price ? (
              <span className="text-muted text-decoration-line-through">
                {data.striked_price}
              </span>
            ) : (
              ""
            )}
            {data.product_price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {data.button_name === "Add to cart" ? (
            <AddCartbutton
              cart_value={cart_value}
              setCartValue={setCartValue}
            />
          ) : (
            <ViewOptionsButton/>
          )}
        </div>
      </div>
    </div>
  );
}
