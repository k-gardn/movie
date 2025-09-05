import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
  console.log("movieId : ", movieId);
  const getMovieDetail = async () => {
    const response = await axios(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
    );
    console.log("detail response : ", response.data.data.movie);
  };
  useEffect(() => {
    getMovieDetail();
    setLoading(false);
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}
export default Detail;
