import React, { useEffect } from "react";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import "../../components/Cart/Cart.css";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductInCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <div className="car">
      <div className="cartt">
        <div aria-label="simple table">
          <div>
            <ul className="cartUl">
              <li className="texts">Picture</li>
              <li className="texts" align="right">
                Name
              </li>
              <li className="texts" align="right">
                Category
              </li>
              <li className="texts" align="right">
                Price
              </li>
              <li className="texts" align="right">
                Count
              </li>
              <li className="texts" align="right">
                Sub Price
              </li>
              <li className="texts" align="right">
                Delete
              </li>
            </ul>
          </div>
          <div>
            {cart?.products.map(elem => (
              <ul className="cartUl"
                key={elem.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <li component="th" scope="row">
                  <img className="pokeImg" src={elem.item.image} style={{width: "100px"}}/>
                </li>
                <li className="texts" align="right">
                  {elem.item.title}
                </li>
                <li className="texts" align="right">
                  {elem.item.category}
                </li>
                <li className="texts" align="right">
                  {elem.item.price}
                </li>
                <li className="counttexto" align="right">
                  <input
                    className="counttexts"
                    sx={{ color: "primary.dark" }}
                    onChange={e =>
                      changeProductCount(e.target.value, elem.item.id)
                    }
                    type="number"
                    value={elem.count}
                  />
                </li>
                <li className="texts" align="right">
                  {elem.subPrice}
                </li>
                <li align="right">
                  <button
                    className="delete"
                    onClick={() => deleteProductInCart(elem.item.id)}>
                    Delete
                  </button>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <h2 className="H">
          Total Price: {cart?.totalPrice}
          <button
            className="button"
            id="accept"
            onClick={() => {
              cartCleaner();
              navigate("/payment");
            }}>
            Accept Order
          </button>
          <button
            id="back"
            className="button"
            onClick={() => {
              navigate("/tours");
            }}>
            Back
          </button>
        </h2>
      </div>
    </div>
  );
}