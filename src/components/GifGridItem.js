import React from 'react'

export  const  GifGridItem = ( {title, url}) => {
    return (
        <div  className="gifContainer">
            <img src={url} width="300" alt={title}/> 
            <h4>{title} </h4>                        
        </div>
    )
}
