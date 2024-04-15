export const ListImage = ({ image, index, setPugImages }) => {
  // Función para eliminar una imagen
  const handleEliminarImage = (imageRemove) => {
    setPugImages((images) =>
      images.filter((_, index) => index !== imageRemove)
    );
  };

  return (
    <>
      <tr key={index} style={{ backgroundColor: "lightgreen" }}>
        <td>{image}</td>
        <td>
          <img src={image} alt="imagen de Pug" width={200} />
        </td>
        <td>
          <button onClick={() => handleEliminarImage(index)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};
