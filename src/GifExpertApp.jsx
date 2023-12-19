// import React from 'react'  //despues de la version 17, ya no es necesario estar importando
//en la parte de vite.config, ya esta definido el import

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () =>
{


    const [categories, setCategories]
        = useState([]);

    const onAddCategory = (lNewCategory) =>
    {
       // console.log(lNewCategory);

        if (categories.includes(lNewCategory)) return;
        setCategories([lNewCategory, ...categories]);
        // Otras formas de llamar la hook con el array u hacer el merge
        //   setCategories([...categories, lNewCategory]);
        //   setCategories( x => [...categories, lNewCategory]);
        //   setCategories( x => [lNewCategory,...categories, lNewCategory]);
    }

    return (
        <>
            <h1>GifExpert.. by ImSuperSir</h1>

            <AddCategory
                onNewCategory={(lNewCategory) => onAddCategory(lNewCategory)}
            />

            {
                categories.map(x => (
                    <GifGrid
                        key={x}
                        category={x} />
                ))
            }
        </>
    )
}

// export default GifExpertApp


