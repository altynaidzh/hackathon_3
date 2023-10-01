import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="mainFooter">
      <footer className="text-center text-white">
        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Свяжитесь со мной</span>
              <button
                type="button"
                className="btn btn-outline-light btn-rounded"
              >
                Звонок
              </button>
            </p>
          </section>
        </div>

        <div className="text-center p-3">© 2023 Copyright:</div>
      </footer>
    </section>
  );
};

export default Footer;
