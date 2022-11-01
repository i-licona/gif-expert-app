import React, { useEffect, useState } from "react"
import { getGifs } from "../helppers/gifs.services";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./grid-item";

export const GifGrid = ({ category }) => {
  const { images, isLoadding } = useFetchGifs(category);
  // html template
  return (
    <>
      <h3>{ category }</h3>
      {
        isLoadding && ( <h2>Cargando...</h2> )
      }
      
      <div className="card-grid">
        {/* mostrart gifs */}
        { images.map((img) => {
            return <GifItem key={ img.id } title={ img.title } url={ img.url } />
        })}
      </div>      
    </>
  )
}