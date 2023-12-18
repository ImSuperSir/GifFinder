// import React from 'react'  //despues de la version 17, ya no es necesario estar importando
//en la parte de vite.config, ya esta definido el import

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () =>
{


  const [categories, setCategories]
    = useState([]);

  const onAddCategory = (event) =>
  {
    console.log(event);
    setCategories([event, ...categories]);
    // Otras formas de llamar la hook con el array u hacer el merge
    //   setCategories([...categories, event]);
    //   setCategories( x => [...categories, event]);
    //   setCategories( x => [event,...categories, event]);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpert.. by ImSuperSir</h1>

      {/*Input  */}
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* listado de gif */}
      <ol>
        {categories.map(x =>
        {
          return <li key={x}> {x}</li>
        })}
      </ol>

      {/* Gif item */}
    </>
  )
}

// export default GifExpertApp


