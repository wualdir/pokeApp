import React, { useRef, useState } from "react";
import { setTrainer } from "../store/slices/trainer.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Styles/HomePage.css";

const HomePage = () => {
  const inputTrainer = useRef();
  const dispach = useDispatch();
  const navitage = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputTrainer.current.value.trim();
    const regex = /^[A-Za-z]+$/;
    const sms1 = "Ingrese su nombre";
    const sms2 = "Este campo solo permite texto";
    dispach(setTrainer(value, regex));

    if (value === "") {
      setError(sms1);
    } else if (!regex.test(value)) {
      setError(sms2);
    } else {
      navitage("/Pokedex");
    }
  };

  return (
    <>
      <section className="HomePage">
        <article className="HomePage__img">
          <img className="HomePage__Img" src="/Imagenes/Logo.png" alt="" />
        </article>

        <article className="HomePage__content">
          <p className="HomePage__title">¡Hi, Trainer!</p>
          <p className="HomePage__Parrafo">to start, give me your name</p>
          <form className="HomePage__form" onSubmit={handleSubmit}>
            <input
              className="HomePage__Input"
              ref={inputTrainer}
              type="text"
              placeholder="Ingresa tu Nomnbre"
            />

            {error && <p className="errorName">{error}</p>}

            <button className="HomePage__button">Start</button>
          </form>
        </article>

        <article className="footers">
          <div className="footers__bgred">
            <div className="footers__icono1">
              <div className="footers__icon2"></div>
            </div>
          </div>

          <div className="footers__bgblack"></div>
        </article>
      </section>
    </>
  );
};

export default HomePage;
