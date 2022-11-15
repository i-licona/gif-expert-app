import { useState } from "react";

export const AddCategory = ({ addCategory }) =>{
  // definir estado inicial
  const [inputValue, setInputValue] = useState('')
  // añadir evento change para el llenado del inputValue
  const inputChange = ({ target }) =>{
    setInputValue((s) => s = target.value);
  }
  // guardar la busqueda en el estado
  const saveChanges = (event) =>{
    // quitar recarga de por evento
    event.preventDefault();
    // validar que el input no este vacio
    if (inputValue == '' || inputValue == null || inputValue == undefined) {
      return;
    }
    // guardar busqueda en el arreglo
    addCategory(inputValue.trim()); 
    resetState();
  }
  // resetear estado inicial
  const resetState = () => {
    setInputValue((s) => s = '' );
  }
  /* template html */
  return(
    <form onSubmit={ (event) => saveChanges(event) } aria-label = 'form'>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={ inputValue }
        onChange = { (event) => inputChange(event) }
      />
    </form>
  );
}