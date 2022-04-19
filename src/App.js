import News from './noticia';
import React from 'react';
import { NewsContextProvider } from './noticiaContext';
import './App.css';

function App() {
  return (
    <NewsContextProvider>

      <News />

    </NewsContextProvider>
  );
}

export default App;
