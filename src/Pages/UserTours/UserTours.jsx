import React, { useContext, useEffect } from "react";
// import { productsContext } from "../../contexts/productsContext";
import CustomCard from "../../components/Card";
import { useProducts } from "../../context/productContext";
// import "./style.css";

const UserProducts = () => {
  const { products, getProducts, deleteProduct } = useProducts()

  const onDelete = async (id) => {
    await deleteProduct(id);
    await getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      <h3>My Products</h3>
      <div className="product-list">
        {products
          ? products.map((item) => (
              <CustomCard product={item} isUserProducts onDelete={onDelete} />
            ))
          : "Empty"}
      </div>
    </div>
  );
};

export default UserProducts;
