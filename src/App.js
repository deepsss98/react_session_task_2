import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { useState } from "react";

function App() {
  const product_data = [
    {
      name: "Fancy Product",
      sale_badge: false,
      rating: false,
      striked_price: "",
      product_price: "$40.00 - $80.00",
      button_name:"View options"
    },
    {
      name: "Special Item",
      sale_badge: true,
      rating: true,
      striked_price: "$20.00 ",
      product_price: "$18.00",
      button_name:"Add to cart"
    },
    {
      name: "Sale Item",
      sale_badge: true,
      rating: false,
      striked_price: "$50.00 ",
      product_price: "$25.00",
      button_name:"Add to cart"
    },
    {
      name: "Popular Item",
      sale_badge: false,
      rating: true,
      striked_price: "",
      product_price: "$40.00",
      button_name:"Add to cart"
    },
    {
      name: "Sale Item",
      sale_badge: true,
      rating: false,
      striked_price: "$50.00 ",
      product_price: "$25.00",
      button_name:"Add to cart"
    },
    {
      name: "Fancy Product",
      sale_badge: false,
      rating: false,
      striked_price: "",
      product_price: "$120.00 - $280.00",
      button_name:"View options"
    },
    {
      name: "Special Item",
      sale_badge: true,
      rating: true,
      striked_price: "$20.00 ",
      product_price: "$18.00",
      button_name:"Add to cart"
    },
    {
      name: "Popular Item",
      sale_badge: false,
      rating: true,
      striked_price: "",
      product_price: "$40.00",
      button_name:"Add to cart"
    },
  ];

  const [cart_value, setCartValue] = useState(0);

  return (
      <div>
      <Navbar cart_value={cart_value}/>
      <Header/>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {product_data.map((data, index) => (
              <Products data={data} key={index} cart_value={cart_value} setCartValue={setCartValue} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
