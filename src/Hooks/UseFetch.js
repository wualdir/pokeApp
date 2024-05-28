import { useState } from "react"
import axios from "axios"

const UseFetch = () => {
  const [response, setresponse] = useState()

    const getApi =(url)=>{
        axios.get(url)
        .then(res => setresponse(res.data))
        .catch(err => console.log(err))
    }
    const getTypeApi =(url)=>{
      axios.get(url)
      .then(res => {
        const obj={
          results:res.data.pokemon.map(e=>e.pokemon)
        }
        setresponse(obj)
      })
      .catch(err => console.log(err))
  }
  return [response, getApi,getTypeApi]
}

export default UseFetch