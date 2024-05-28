import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import UseFetch from "../Hooks/UseFetch";
import { useEffect } from "react";
import PokeCard from "../components/HomePage/PokeDex/PokeCard";
import SelectType from "../components/HomePage/PokeDex/SelectType";
import "./Styles/PokeDexPage.css";

const PokeDexPage = () => {
  const [Searchedname, setSearchedname] = useState("");
  const [typeSelect, settypeSelect] = useState("allPokemos");

  const trainer = useSelector((states) => states.trainer);
  const [pokemons, getpokemons, getTypepokemos] = UseFetch();

  useEffect(() => {
    if (typeSelect === "allPokemos") {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
      getpokemons(url);
    } else {
      getTypepokemos(typeSelect);
    }
  }, [typeSelect]);

  const inputName = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedname(inputName.current.value.trim().toLowerCase());
  };

  const callBackFilter = (poke) => {
    const filtername = poke.name.includes(Searchedname);
    return filtername;
  };
  return (
    <>
      <div className="mainPage">
        <img className="mainPage__img" src="/Imagenes/Logo.png" alt="" />
        <div className="mainPage__icon">
          <div className="mainPage__icono1">
            <div className="mainPage__icon2"></div>
          </div>
        </div>
      </div>

      <div className="divDearch">
        <p className="divDearch__welcome  ">
          {" "}
          <span className="Name">welcome {trainer} </span>here you will , find
          your favorite pokemon
        </p>

        <div className="formSearch">
          <form className="form" onSubmit={handleSearch}>
            <input
              className="formSearch__input "
              ref={inputName}
              type="text"
              placeholder="Buscar Pokemon"
            />
            <button className="formSearch__button">Search</button>
          </form>
          <SelectType settypeSelect={settypeSelect} />
        </div>
      </div>

      <div className="divContainer">
        {pokemons && pokemons.results.filter(callBackFilter).length === 0 ? (
          <div className="smsError">
            <p className="smsError__P">
              ❌the are pokemon that meet the filters
            </p>
          </div>
        ) : (
          pokemons?.results
            .filter(callBackFilter)
            .map((poke) => <PokeCard key={poke.url} poke={poke} />)
        )}
      </div>
    </>
  );
};

export default PokeDexPage;
