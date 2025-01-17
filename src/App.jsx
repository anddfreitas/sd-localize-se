import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "AIzaSyDBtnB4n6WVqQdBHucYd4oZiuYSuugPAzk"; // Substitua pela sua chave de API
  const [place, setPlace] = useState("Pau dos Ferros");
  const [inputValue, setInputValue] = useState("");

  const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
    place
  )}`;

  const handleSearch = () => {
    if (inputValue.trim()) {
      setPlace(inputValue);
    }
  };

  return (
    <div className="app-container">
      <h1>Localize-se</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Digite a cidade ou lugar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Pesquisar
        </button>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={url}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
