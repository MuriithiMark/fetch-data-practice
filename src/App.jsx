import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((response) => response.json())
      .then((photosData) => {
        const filteredPhotos = photosData.filter((data) => data.id % 100 === 0);
        setPhotos(filteredPhotos);
      });
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id} className="photo">
          <img src={photo.url} alt={photo.title} />
          <span className="info">
            ID: <span className="id">{photo.id}</span> - TITLE:{" "}
            <span className="title">
              <a
                href={`https://jsonplaceholder.typicode.com/photos/${photo.id}`}
              >
                {photo.title}
              </a>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
