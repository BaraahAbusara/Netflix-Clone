//import './Home.css';
import MovieList from '../MovieList/MovieList'
import { useState, useEffect } from 'react';
import axios from 'axios';
URL=process.env.URL; 


function Home()
 {
    const [data, setData] = useState([]);
    const getTrendingMovies = async () => {
        return await axios.get(`https://newmoviesbybaraah.herokuapp.com/trending`)
            .then(result => {
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        void(async()=>{
          let data = await getTrendingMovies();
          setData(data);
          
        })();   
    },[]);

    return (
        
        <MovieList data={data}/> 
        
        
    )
}

export default Home; 