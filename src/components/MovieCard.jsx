import React from 'react'
import noImg from "../assets/no-image.jpg"

function MovieCard({title, img, overview, id}) {
    return (
        <div className="cartita col-md-4 bg-dark" key={id}>
            <div className='card bg-dark'>
                <div className="card-body text-white">
                {
                    img ? <img src={img} alt="" width="100%" /> : <img src={noImg} alt="" width="100%" />
                }
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{overview}</p>
                </div>
            </div>
        </div>
            

    )
}

export default MovieCard