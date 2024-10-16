import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilme() {
      await api.get(`/movie/${id}` , {
        params:{
          api_key:"35ffe8e8b43516ceb96e92a2b4efcfbe",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=> {
        console.log("Filme não encontrado")
      })
    }
    loadFilme();

    return () => {
      console.log('Componente desmontado')
    }
  }, [])

  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando detalhes..</h1>
      </div>
    )
  }

  return(
    <div className="filme-info">
      <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} / 10</strong>
    </div>
  )
}
export default Filme;