// import React from 'react'

import { useState } from "react"

export const AddCategory = () =>
{

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) =>
  {
    const { value } = event.target;
    setInputValue(value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    /*
    
    */

    <form onSubmit={ (event) => onSubmit(event)}>
      <input type="text"
        placeholder="Add a category"
        value={inputValue}
        // onChange={(event) =>
        // {
        //   onInputChange(event)
        // }
        // }
        onChange={onInputChange}
      >
      </input>
    </form>


  )
}

