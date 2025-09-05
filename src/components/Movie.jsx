import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * 영화 정보를 보여주는 컴포넌트
 *
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.coverImg - 영화 포스터 이미지 URL
 * @param {string} props.title - 영화 제목
 * @param {string} props.summary - 영화 줄거리
 * @param {string[]} props.genres - 영화 장르 목록
 * @returns {JSX.Element} 렌더링된 영화 카드
 */

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => {
          return <li key={g}>{g}</li>;
        })}
      </ul>
    </div>
  );
}

Movie.PropTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
