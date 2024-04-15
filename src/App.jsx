import { useState } from "react";
import { ListImages } from "./components/ListImages";

function App() {
  const [mostrarImages, setMostrarImages] = useState(false);

  const handleMostrarImages = () => {
    setMostrarImages(true);
  };
  const handleQuitarImages = () => {
    setMostrarImages(false);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Imágenes de Pugs</h1>
      {mostrarImages ? (
        <div style={{ textAlign: "center" }}>
          <button onClick={handleQuitarImages}>Regresar</button>
          <ListImages mostrarImages={mostrarImages} />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <button onClick={handleMostrarImages}>Mostrar Imágenes</button>
          <p>
            Haga click en el Botón (Mostrar Imágenes) para cargar las imágenes
          </p>
        </div>
      )}
    </>
  );
}

export default App;
