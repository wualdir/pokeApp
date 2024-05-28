import { useEffect } from "react"
import UseFetch from "../../../Hooks/UseFetch"
import './Styles/SelectType.css'


const SelectType = ({settypeSelect}) => {
  
    const [types,getTypes] = UseFetch()

    useEffect(() => {
        const url='https://pokeapi.co/api/v2/type?offset=0&limit=100'
        getTypes(url)
    }, [])
    
    const handleChanges=(e)=>{
        settypeSelect(e.target.value)
    }
  
    return (
       <div className="search__Pokemons">
       <select  onChange={handleChanges}>
        <option value="allPokemos">All Pokemos</option>
        {
                types?.results.map(typeInfo=>(
                <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
            ))
        }
    </select>
        </div>
    
  )
}

export default SelectType