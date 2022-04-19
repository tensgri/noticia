import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <img src={data.urlImage}width="350" height="150" />
      <h1 className="news__title">{data.titulo}</h1>
      <p className="news__desc">{data.descripcion}</p>
      <span className="news__author">{data.autor}</span> <br />
      <span className="news__published">{data.fechaCreacion}</span>
      <span className="news__source">{data.urlNews}</span>
    </div>
  );
}

export default NewsArticle;