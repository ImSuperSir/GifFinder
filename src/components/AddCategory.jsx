// import React from 'react'

import { useState } from "react"


// En este caso : onAddCategory, es el nombre del prop
// que se agrego el el compnente padre y que es la funcion 
// para establecer el valor del useState de categorias
{/* <AddCategory onAddCategory = { setCategories }/> */}
// Tonces, esta function, recibe como argumento el estado previo "array actual"
// tonces lo usamos en una funcion de flecha lo agregamos al nuevo array junto
// con el nuevo valor que se agregara al array del estado, y la lista de la pagina
export const AddCategory = ( {onAddCategory} ) =>
{

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) =>
  {
    const { value } = event.target;
    setInputValue(value);
  }

  const onSubmit = (event) => {
    event.preventDefault();  //prevent the webpage's postback

    if(inputValue.trim().length <= 1) return;
    onAddCategory( (estadoPrevio) => [inputValue, ...estadoPrevio]);
    //estado previo es el valor actual, bien pudiera escribirse como x => [inputValue, ...x]
    setInputValue(''); // cambiamos el estado del input (state), y por endel el textinput
  }



  return (
    /*
    
    */

    <form onSubmit={ onSubmit}>
      {/* <form onSubmit={ (event) => onSubmit(event)}> */}
      <input type="text"
        placeholder="Add a category"
        value={inputValue}
        onChange={onInputChange}
      >
      </input>
    </form>


  )
}

