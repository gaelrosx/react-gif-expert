import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifsGridItem } from "./GifsGridItem";

export const GifsGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
      {loading && (
        <p className="animate__animated animate__flash">Loading Gifs...</p>
      )}

        {images.map((img) => (
          <GifsGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
