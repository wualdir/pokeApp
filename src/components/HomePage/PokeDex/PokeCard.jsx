import { useEffect } from 'react'
import UseFetch from "../../../Hooks/UseFetch"
import { useNavigate } from "react-router-dom"
import './Styles/PokeCard.css'

const PokeCard = ({poke}) => {
  const [pokemon , getpokemon]= UseFetch()
  useEffect(() => {
    getpokemon(poke.url)
  
  }, [])
 const navigate =  useNavigate()

  const handleNavDetail = ()=>{
navigate(`/pokemon/${pokemon.name}`)
  }
  

  return (
    <article className={`poke border__${pokemon?.types[0].type.name}`} onClick={handleNavDetail}>
      <header className={`poke__header bg__${pokemon?.types[0].type.name}`}>
        <img  className='poke__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='poke__body '>
          <h3 className='poke__name'>{pokemon?.name}</h3>
          <ul className='poke__types'>
            {
            pokemon?.types.map(typeinfo=>(
            <li className='poke__types__item' key={typeinfo.type.url}>{typeinfo.type.name}</li>
            )
          )}
          </ul>
          <hr className='poke__hr' />
          <ul className='poke__stats'>
            {
              pokemon?.stats.map(staInfo=>(
                <li className='poke__stats__item' key={staInfo.stat.url}>
                  <span className='poke__stats__label' >{staInfo.stat.name}</span>
                  <span className='poke__stats__value'>{staInfo.base_stat}</span>
                </li>
              ))
            }
          </ul>
        </section>
     

    </article>
  )
}

export default PokeCard