import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Link: 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year,summary, genres}){
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <h2 className={styles.movie__title}><Link to={`/movie/${id}`}> {title} </Link></h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
            <ul className={styles.movie__genres}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}              
            </ul>
      </div>
    );
}

Movie.protoTypes = {
    id: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;