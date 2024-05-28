import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";
import "./Styles/PokeInfoPage.css";

const PokeInfoPage = () => {
  const { name } = useParams();

  const [pokemon, getpokemon] = UseFetch();
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    getpokemon(url);
  }, [name]);

  return (
    <>
      <article className="header">
        <div className="header__bgred">
          <div className="header__icono">
            <div className="header__icon"></div>
          </div>
        </div>

        <div className="header__bgblack"></div>
      </article>

      <section className="PokePageInfo__Container">
        <header
          className={`PokePageInfo__hijo1 bg__${pokemon?.types[0].type.name}`}
        >
          <img
            className="PokePageInfo__img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>

        <article className="PokePageInfo__hijo2">
          <h2 className="PokePageInfo__hijo2--id">#{pokemon?.id}</h2>
          <h2 className="PokePageInfo__hijo2--title">{pokemon?.name}</h2>
          <ul className="PokePageInfo__hijo2--info">
            <li className="PokePageInfo__hijo2--item">
              <span className="PokePageInfo__hijo2--label">Peso</span>
              <span className="PokePageInfo__hijo2--value">
                {pokemon?.height}
              </span>
            </li>

            <li className="PokePageInfo__hijo2--item">
              <span className="PokePageInfo__hijo2--label">Altura</span>
              <span className="PokePageInfo__hijo2--value">
                {pokemon?.weight}
              </span>
            </li>
          </ul>
        </article>

        <article className="PokePageInfo__hijo3">
          <div className="PokePageInfo__hijo3--div1">
            <h3 className="PokePageInfo__hijo3--type">Type</h3>
            <ul className="PokePageInfo__hijo3--info">
              {pokemon?.types.map((staInfo) => (
                <li
                  className="PokePageInfo__hijo3--item"
                  key={staInfo.type.url}
                >
                  <span className="PokePageInfo__hijo3--name">
                    {staInfo.type.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="PokePageInfo__hijo3--div">
            <h3 className="PokePageInfo__hijo3--type">abilities</h3>
            <ul className="PokePageInfo__hijo3--info">
              {pokemon?.abilities.map((staInfo) => (
                <li
                  className="PokePageInfo__hijo3--item"
                  key={staInfo.ability.url}
                >
                  <span className="PokePageInfo__hijo3--name">
                    {staInfo.ability.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="PokePageInfo__hijo4">
          <p className="PokePageInfo__hijo4--Stats">Stats</p>
          <ul className="PokePageInfo__hijo4--habilities">
            <li className="PokePageInfo__hijo4--item">
              <span className="PokePageInfo__hijo4--label">HP:</span>
              <span
                className={`PokePageInfo__hijo4--value bgcolor__${pokemon?.stats[0].base_stat}`}
              >
                {" "}
                {pokemon?.stats[0].base_stat}/150
              </span>
            </li>
            <li className="PokePageInfo__hijo4--item">
              <span className="PokePageInfo__hijo4--label">Ataque:</span>
              <span className="PokePageInfo__hijo4--value">
                {pokemon?.stats[1].base_stat}/150
              </span>
            </li>

            <li className="PokePageInfo__hijo4--item">
              <span className="PokePageInfo__hijo4--label">Defensa:</span>
              <span className="PokePageInfo__hijo4--value">
                {pokemon?.stats[2].base_stat}/150
              </span>
            </li>

            <li className="PokePageInfo__hijo4--item">
              <span className="PokePageInfo__hijo4--label">Velocidad:</span>
              <span className="PokePageInfo__hijo4--value">
                {pokemon?.stats[3].base_stat}/150
              </span>
            </li>
          </ul>
        </article>
      </section>

      <section className="movements">
        <h3 className="movements__title">Movements</h3>

        <ul className="movements__movent">
          {pokemon?.moves.map((movemen) => (
            <li className="movements__movent--item" key={movemen.move.url}>
              <span className="movements__movent--movimiento">
                {movemen.move.name}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default PokeInfoPage;
