import { useState, useEffect } from "react";
import { ListImage } from "./Image";

export const ListImages = ({ mostrarImages }) => {
  const [pugImages, setPugImages] = useState([]);

  const API = "https://dog.ceo/api/breed/pug/images";

  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => setPugImages(data.message));
  }, [mostrarImages]);

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          backgroundColor: "green",
          padding: "10px",
          color: "white",
        }}
      >
        Lista de Pugs
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <table
          style={{
            border: "1px solid green",
            textAlign: "center",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "green",
                color: "white",
              }}
            >
              <td>URL</td>
              <td>Imagen</td>
              <td>Acción</td>
            </tr>
          </thead>
          <tbody>
            {pugImages.map((image, index) => (
              <>
                <ListImage
                  image={image}
                  index={index}
                  setPugImages={setPugImages}
                />
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
