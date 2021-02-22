import React, {useState, useEffect} from 'react'
import axios from '../axios';
import '../styles/Row.css'
import YouTube from 'react-youtube';


const base_url = "https://image.tmdb.org/t/p/original/"
export default function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    
    useEffect(() =>{
        //if [], run once when the row loads, and don't run again.
        async function fetchData(){
            const request = await axios.get(fetchUrl);  //baseURL+fetchUrl
            setMovies(request.data.results)
            if(title === 'Documentaries')
            {
                console.log(request);
            }

            return request;
            
        }
        fetchData();

        // axios.get(fetchUrl).then((request)=>{
        //     console.log(request);
        // }).catch((err)=>{
        //     console.log(err);
        // })
    },[fetchUrl]);  //useEffect is dependent on 'fetchUrl' because everytime fetchUrl changes, it needs to re-render the useEffect. 
                    //and the reason we're using 'fetchUrl because the fetchUrl is present in outside of the block which makes useEffect very clear that this variable i.e. 'fetchUrl' is changing.

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
        };

    const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=8a2cec195cbef754a2470db552a993cd`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
        }
      };
    
    
        
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick = {() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        alt={movie.name} 
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
