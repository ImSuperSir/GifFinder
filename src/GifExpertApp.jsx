// import React from 'react'  //despues de la version 17, ya no es necesario estar importando
                              //en la parte de vite.config, ya esta definido el import

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () =>
{


  const [categories, setCategories] 
  = useState(['Frida', 'Lauro']);

  const onAddCategory = (event) =>{
    // setCategories([...categories, 'Nueva']);
    setCategories( x => [...categories, 'Otra']);
    setCategories( x => ['PrimeraPosi',...categories, 'Otra']);
    
    //console.log('Otra');
  }

  return (
    <>
    {/* titulo */}
      <h1>GifExpert.. by ImSuperSir</h1>

      {/*Input  */}
      <AddCategory />
           <button 
        onClick={onAddCategory}>
        Add Category
      </button>

      {/* listado de gif */}
      <ol>
        {categories.map( x => {
          return <li key={x}> {x}</li>
        }) }
      </ol>
      
        {/* Gif item */}
    </>
  )
}

// export default GifExpertApp


