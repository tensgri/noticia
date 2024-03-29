import React, { createContext, useEffect, useState } from "react";

import axios from "axios";



export const NewsContext = createContext();



export const NewsContextProvider = (props) => {

  const [data, setData] = useState();





  useEffect(() => {

    axios

      .get(

    "https://localhost:44372/api/News" 
    //"https://newsapi.org/v2/top-headlines?country=us&apiKey=1267fb5c15264fe7a074c15ccd129b58"
      )

      .then((response) => setData(response.data))

      .catch((error) => console.log(error));

  }, []);



  return (

    <NewsContext.Provider value={{ data }}>

      {props.children}

    </NewsContext.Provider>

  );

};