import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import MovieCard from './components/MovieCard';
import noImg from "./assets/no-image.jpg"

function App() {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({
    title: "Loading Movies"
  });
  const [playing, setPlaying] = useState(false)
  const [language, setLanguage] = useState("")






  const API_URL = "https://api.themoviedb.org/3"
  const API_KEY = "518de0b8aedcc031ba381037848555a0"
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original"
  const URL_IMAGE = "https://image.tmdb.org/t/p/original"


  const fetchMovies = async (searchKey, language) => {
    const type = searchKey ? "search" : "discover"
    const idioma = language ? language : " "


    const { data: { results }, } = await axios.get(API_URL + "/" + type + "/movie", {
      params: {
        api_key: API_KEY,
        query: searchKey,
        language: idioma
      }
    })


    setMovies(results)
    setMovie(results[0])








  }




  const searchMovie = (e) => {
    e.preventDefault()
    fetchMovies(searchKey, language)



  }

  useEffect(() => {
    fetchMovies(searchKey, language);

  }, [language])







  return (
    <div className='app'>
      <div>
        <a className='a' href="./index.html">
          {
          language == "es-MX" ? <h1 className='text-center text-white'>Buscador de peliculas</h1> : <h1 className='text-center text-white'>Search Movies</h1>
        }
        </a>
        
      </div>


      <div className='container'>
        <form onSubmit={searchMovie} className='d-flex align-items-center justify-content-center mt-5 mb-5' >
          <div className="buscador">
            <input className='' type="search" name="" id="" onChange={(e) => { setSearchKey(e.target.value) }} />
            <button className=''><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

          <div>
            <select name="" className='' id="" onChange={(e) => { setLanguage(e.target.value) }}>
              <option value="en-US">Ingles</option>
              <option value="es-MX">Español</option>
            </select>
          </div>
        </form>

        <div className="row">
          {
            movies.map((peli) => {
              if (peli.poster_path == null) {
                return <MovieCard img={noImg} title={peli.title} overview={peli.overview} id={peli.id} key={peli.id + "a"} />
              }
              return <MovieCard img={URL_IMAGE + peli.poster_path} title={peli.title} overview={peli.overview} id={peli.id} key={peli.id + "a"} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
