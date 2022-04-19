import React, { useContext } from "react";

import { NewsContext } from "./noticiaContext";

import NewsArticle from "./AriculoNoticia";



function News(props) {

  const { data } = useContext(NewsContext);

  console.log(data);



  return (

    <div>

      <h1 className="head__text">Aplicacion de Noticia</h1>

      <div className="all__news">

        {data

          ? data.map((news) => (

              <NewsArticle data={news} key={news.idNews} />

            ))

          : "cargando"}

      </div>

    </div>

  );

}



export default News;