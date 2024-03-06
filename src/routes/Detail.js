import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      <h1 className={styles.title}>Detail</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div className={styles.container}>
          <div className={styles.child}>
            <img
              src={movie.medium_cover_image}
              alt={movie.id}
              onClick={() => window.open(movie.url)}
            />
          </div>
          <div>
            <h1>
              {movie.title} ({movie.rating}/10.0)
            </h1>

            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p className={styles.description}>{movie.description_intro}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
