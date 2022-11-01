import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Dragon Ball Z'])
  const addCategory = (stringValue) => {
    // validar que el elemento no exista
    if (categories.includes(stringValue)) {
      return;
    }

    setCategories( (s) => [ stringValue, ...s ] );
  }
  return (
    <>
      {/* title */}
      <h1>Git Expert App</h1>
      {/* Input */}
      <AddCategory addCategory = { addCategory } />
      {/* Listado de gifs */}
        { categories.map(item => {
          return(
            <GifGrid key={ item } category = { item } />
          );
        })}
      {/* gift item */}
    </>
  );
}