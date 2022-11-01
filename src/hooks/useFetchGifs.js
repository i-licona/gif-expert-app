import { useEffect, useState } from "react";
import { getGifs } from "../helppers/gifs.services";

export const useFetchGifs = (category) => {
  const [ images, setImages ] = useState([]);
  const [ isLoadding, setIsLoadding ] = useState(true);
  // obtener imagenes
  const getImages = async() =>{
    const images = await getGifs(category);
    setImages( (state) => images );
    setIsLoadding(false);
  }
  // hook useEffect
  useEffect( () => {
    getImages();
  }, []);

  return {
    images: images,
    isLoadding: isLoadding,
  }
}