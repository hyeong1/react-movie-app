import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, coverImg, genres, rating }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.child}>
          <img src={coverImg} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <Link to={`/movie/${id}`}>
            <button className={styles.btn}>Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
