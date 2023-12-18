// import React from 'react'  //despues de la version 17, ya no es necesario estar importando
//en la parte de vite.config, ya esta definido el import

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () =>
{


  const [categories, setCategories]
    = useState([]);

  const onAddCategory = (lNewCategory) =>
  {
    console.log(lNewCategory);

    if (categories.includes(lNewCategory)) return;
    setCategories([lNewCategory, ...categories]);
    // Otras formas de llamar la hook con el array u hacer el merge
    //   setCategories([...categories, lNewCategory]);
    //   setCategories( x => [...categories, lNewCategory]);
    //   setCategories( x => [lNewCategory,...categories, lNewCategory]);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpert.. by ImSuperSir</h1>

      {/*Input  */}
      <AddCategory
        onNewCategory={(lNewCategory) => onAddCategory(lNewCategory)}
      />

      {/* listado de gif */}
      <ol>
        {
          categories.map(x =>
          {
            return (
              <div key={x}>
                <h3>{x}</h3>
                <li> {x}</li>
              </div>

            )
          })
        }
      </ol>

      {/* Gif item */}
    </>
  )
}

// export default GifExpertApp


