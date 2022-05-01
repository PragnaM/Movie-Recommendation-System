import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Recommendations} from './Recommendations';
import AddFavourites from './AddFavourites';
//import Recommendations from './Recommendations';
//import AddFavourites from './AddFavourites';

const MovieCard = (props) => {
const IMAGE_PATH= " https://image.tmdb.org/t/p/w500"
const API_URL = "https://api.themoviedb.org/3/movie";
const [recommendations, setRecommendations] = useState([]);
const [showRecommendations, setShowRecommendations] = useState(false);
//const FavouriteComponent = props.favouriteComponent;


const handleRecommendationsClick=async(id) =>
{
  console.log(id);
  //<Recommendations movieid ={id}/>
    const {data : {results}} = await axios.get(`${API_URL}/${id}/recommendations`, {
      params:
      {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
      });
      console.log(results);
      setRecommendations(results);
      console.log(showRecommendations);
    }
   
    console.log(recommendations)
    const openModal = () => {
      setShowRecommendations(true);
    };

    useEffect ( () => {
        handleRecommendationsClick();
      })

  return (
    <>
   {props.movies.map((movie,index) => (
        <div className={'moviecard'}>
          <div className ='image-container d-flex align-items-center m-3'>
           <img className ={'movie-cover'} 
           src = {`${IMAGE_PATH}${movie.poster_path}`} alt= '' 
            /> 
             <div onClick= {()=> {openModal(); handleRecommendationsClick(movie.id)}} className= 'overlay align-items-center justify-content-center'>
                  {/* <div className='overlay align-items-center justify-content-center'> */}
                  <AddFavourites/>
              </div>
              <div className='container-recommend'>
                  {showRecommendations ? <Recommendations  recommender= {recommendations} setShowRecommendations={setShowRecommendations} /> : null}
              </div>
                  {/* </div> */}
             
                  {/* <div className='container row max-center'>
                  <Recommendations recommender={recommendations}/> 
                  </div> */}
              
          </div> 
          <h5 className='movie-title'>{movie.title}</h5> 
        </div> 
        
     ))}   
    </>
    );
  };

export default MovieCard;