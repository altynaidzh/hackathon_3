import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./cardstyles.css";
import { useCart } from "../../context/cartContext";

const CustomCard = ({ product, isUserProducts, onDelete }) => {
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart } = useCart();

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    gap: "10px",
  };

  return (
    <Card className="custom-card">
      <div style={{ position: "relative", width: "100%", paddingTop: "100%" }}>
        <Card.Img
          src={product.image}
          alt={product.title}
          style={{
            objectFit: "cover",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="info">
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Цена: {product.price}</p>
          <div style={buttonContainerStyle}>
            <Button
              onClick={() => navigate(`/product-detail/${product.id}`)}
              variant="light"
            >
              Details
            </Button>
            <Button
              onClick={() => addProductToCart(product)}
              variant="light"
            >
              {`${
            checkProductInCart(product.id) ? "Delete from cart" : "Add to cart"
          }`}
            </Button>
            {isUserProducts && (
              <>
                <Button variant="light" onClick={() => onDelete(product.id)}>
                  Delete
                </Button>
                <Button
                  variant="light"
                  onClick={() => navigate(`/edit-product/${product.id}`)}
                >
                  Edit
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;
