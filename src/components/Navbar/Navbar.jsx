import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import SearchComponent from "../SearchComponents/SearchComponent";

function NavScrollExample() {
  const [currentUser, setCurrentUser] = useState("");
  const isAdmin = currentUser === "altynai@gmail.com";
  const navigate = useNavigate();
  const { handleLogout } = useContext(authContext);

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  }, []);

  return (
    <Navbar bg="info" variant="info" expand="lg">
      <Container style={{ width: "80%", margin: "0 auto" }}>
        <Navbar.Brand href="#">Penguin Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
            <NavDropdown title="Туры" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/tours")}>
                Туры
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
            <NavDropdown title="Admin" id="navbarScrollingDropdown">
              {isAdmin && (
                <NavDropdown.Item onClick={() => navigate("/user-products")}>
                  Редактировать
                </NavDropdown.Item>
              )}
              {isAdmin && (
                <NavDropdown.Item onClick={() => navigate("/create-product")}>
                  New Tour
                </NavDropdown.Item>
              )}
              {isAdmin && (
                <NavDropdown.Item onClick={() => navigate("/create-category")}>
                  Создать категорию
                </NavDropdown.Item>
              )}
            </NavDropdown>

            <NavDropdown title="Пользователь" id="navbarScrollingDropdown">
              {!currentUser ? (
                <>
                  <NavDropdown.Item onClick={() => navigate("/login")}>
                    Войти
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/signup")}>
                    Зарегистрироваться
                  </NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item onClick={() => handleLogout(navigate)}>
                  Выйти
                </NavDropdown.Item>
              )}
            </NavDropdown>

            <Nav.Link href="#" disabled>
              {currentUser ? currentUser : "No auth user"}
            </Nav.Link>
          </Nav>
          <SearchComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
