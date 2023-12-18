import { useState } from "react"

//Ahora New Category, es una funcion del componente padre
export const AddCategory = ( {onNewCategory} ) =>
{

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) =>
  {
    const { value } = event.target;
    setInputValue(value);
  }

  const onSubmit = (event) => {
    event.preventDefault();  //prevent the webpage's postback
    const lNewCategory = inputValue.trim();

    if(lNewCategory.length <= 1) return;

    onNewCategory(lNewCategory);
    setInputValue(''); // cambiamos el estado del input (state), y por endel el textinput
  }



  return (
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

