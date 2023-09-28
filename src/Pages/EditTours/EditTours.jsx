import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productContext";
// import "./style.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const { getCategories, categories, getProductById, oneProduct, editProduct } =
    useContext(productsContext);
  const { id } = useParams();

  useEffect(() => {
    getCategories();
    getProductById(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setImage(oneProduct.image || "");
      setPrice(oneProduct.price);
      setSelectedCategory(oneProduct.category);
    }
  }, [oneProduct]);

  const handleSubmit = async () => {
    const product = {
      title,
      description,
      price,
      image,
      category: selectedCategory,
    };
    for (const key in product) {
      if (!product[key].trim()) {
        return alert("Заполните все поля");
      }
    }

    await editProduct(product, id);
    navigate("/user-products");

    setTitle("");
    setDescription("");
    setPrice("");
    setSelectedCategory("");
  };

  return (
    <div className="form-wrapper">
      <h3>Edit Product</h3>
      <Form>
        <Form.Control
          type="text"
          placeholder="Ввеедите название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Введите описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Вставьте ссылку"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Form.Select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option>Choose category</option>
          {categories &&
            categories.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
        </Form.Select>
        <Button onClick={handleSubmit} className="outline-success">
          Изменить
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
