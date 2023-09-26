
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./cardstyles.css";


const CustomCard = ({ product, isUserProducts, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={product.image} />
      <div className="info">
        <div>
          <h3>{product.title}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button
              onClick={() => navigate(`/product-detail/${product.id}`)}
              variant="primary"
            >
              Details
            </Button>
            {isUserProducts && (
              <>
                <Button variant="danger" onClick={() => onDelete(product.id)}>
                  Delete
                </Button>
                <Button
                  variant="info"
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
