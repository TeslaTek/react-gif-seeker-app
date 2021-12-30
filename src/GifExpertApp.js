import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);


    return (
        <>
            <h2>Gif seeker</h2>
            <AddCategory  setCategories = { setCategories }/>
            <button onClick={() => setCategories([])}>Reset</button>
            <hr/>

            

            <main>
         
                {
                    categories.map( (category, id) => {
                        return <GifGrid key={category + id} category= {category} />
                    })
                }
            
            </main>
        </>
    )
}

export default  GifExpertApp