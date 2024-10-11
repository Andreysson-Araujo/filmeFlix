import { useEffect, useState } from "react";
import api from "../../services/api";


function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
        api_key:"35ffe8e8b43516ceb96e92a2b4efcfbe",
        language: "pt-BR",
        page: 1,
        }
      })
      console.log(response)
    }

    loadFilmes();
  }, [])


  return(
    <div>
      <h1>Bem vindo a Home</h1>
    </div>
  )
}

export default Home;