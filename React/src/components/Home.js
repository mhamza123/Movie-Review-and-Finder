import Browse from "./Browse";
import useFetch from "./useFetch";
import '../styles/Home.css';

const Home = () => {
  const { error, isPending, data } = useFetch('http://localhost:8000/movie')

  return (
    <div className="home">
      <div className="browseMovies">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { data && <Browse movies={data} /> }
      </div>
      <div className="favourite">
        <h2>Favourites</h2>
      </div>
    </div>
  );
}
 
export default Home;