import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category}) => {
   


    
   const {data:images, loading} =  useFetchGifs(category);



    return (
        <>
            <div className='animate__animated animate__fadeIn'>
                <h3>{category}</h3>
                <hr/>
            </div>
            { loading && <p className='animate__animated animate__flash' >Loading ...</p>}
            <section className='gridContainer  animate__animated animate__fadeIn '>
                {   images.map( img => (
                         <GifGridItem key={img.id} {...img} />
                ))
                }
            </section>           
        </>
    )
}
