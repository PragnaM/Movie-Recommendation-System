import React, { useRef } from "react";
//import ReactDom from "react-dom";

// export const Modal = ({ setShowModal }) => {
//     // close the modal when clicking outside the modal.
    
//     };

export const Recommendations =(props) => {
    const IMAGE_PATH= " https://image.tmdb.org/t/p/w500"
   // const setShowModal= props.setShowRecommendations
    const modalRef = useRef();
    //console.log(setShowRecommendations);
    const closeModal = (e) => {
      if (e.target === modalRef.current) {
        props.setShowRecommendations(false);
      }
    };
    

return (
        <div className="" ref={modalRef} onClick={closeModal}>
        {/* <h2>This is a Modal</h2> */}
            <div className="modal max-center">
            {props.recommender.map((movie,index) => (
                <div className ='image-container-recommend'>
                    <img className ={'movie-cover-recommendations'} src = {`${IMAGE_PATH}${movie.poster_path}`} alt= '' /> 
              <h5 className='movie-title-recommend'>{movie.title}</h5> 
              </div>  ))}
        <div  className="modal-button" onClick={() => props.setShowRecommendations(false)}>X</div>
        </div>
      </div>  
  );
            }