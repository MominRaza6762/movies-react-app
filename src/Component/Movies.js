import React from "react";
import { Nav } from "./Nav";
import list from "./list";
import { Card } from "./Card";
import { useState } from "react";



export const Movies = () => {
   
    

    const uniqueList = [...new Set(list.map((e)=>{
      return e.category;
    })),
    "All"
    ]
    const [moviesList , setMoviesList] = useState(list)
    const [updMoviesList , setUpdMoviesList] = useState(uniqueList)
    
    const fnFilterList = (category)=>{
      if(category==="All")
      {
        setMoviesList(list);
      }
      else
      {const newList =list.filter((element) => {
        return element.category===category;
    })
    setMoviesList(newList);}
        

    }

  return (
    <>
    
    <Nav filterList={fnFilterList} updatedList={updMoviesList}/>
    <Card mList = {moviesList}/>
    </>
  );
};
