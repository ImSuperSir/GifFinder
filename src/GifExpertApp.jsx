// import React from 'react'  //despues de la version 17, ya no es necesario estar importando
//en la parte de vite.config, ya esta definido el import

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () =>
{


  const [categories, setCategories]
    = useState([]);

  // const onAddCategory = (event) =>{
  //   // setCategories([...categories, 'Nueva']);
  //   setCategories( x => [...categories, 'Otra']);
  //   setCategories( x => ['PrimeraPosi',...categories, 'Otra']);


  //   //console.log('Otra');
  // }

  const onAddCategory = (event) =>
  {
    console.log(event);
    setCategories([event, ...categories]);

    //   setCategories([...categories, 'Nueva']);
    //   setCategories( x => [...categories, 'Otra']);
    //   setCategories( x => ['PrimeraPosi',...categories, 'Otra']);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpert.. by ImSuperSir</h1>

      {/*Input  */}
      <AddCategory
        //onAddCategory={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />  {/* se manda la referencia de la funcion "SetCategories" 
                                                          que es la de UseState en este caso particular */}


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


