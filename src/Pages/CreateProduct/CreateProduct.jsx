import React, { useContext, useEffect, useState } from "react";
// import "./style.css";
import { Button, Form } from "react-bootstrap";
import { productsContext } from "../../context/productContext";

// import { toast } from "react-toastify";

const CreateProduct = () => {
  const { getCategories, categories, createProduct } =
    useContext(productsContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const handleSubmit = async () => {
    const product = {
      title,
      price,
      description,
      category: selectedCategory,
      image,
    };

    for (const key in product) {
      if (!product[key].trim()) {
        return alert("Заполните все поля");
      }
    }

    await createProduct(product);
    alert("Продукт успешно добавлен");
    setTitle("");
    setPrice("");
    setDescription("");
    setSelectedCategory("");
    setImage("");
  };

  return (
    <div className="form-wrapper">
      <h3>Create Product</h3>
      <Form>
        <Form.Control
          type="text"
          placeholder="Введите название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Введите описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Form.Control
          type="text"
          placeholder="Вставьте ссылку"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Form.Select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option>Choose category</option>
          {categories &&
            categories.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
        </Form.Select>
        <Button onClick={handleSubmit} className="outline-success">
          Добавить
        </Button>
      </Form>
    </div>
  );
};

export default CreateProduct;
