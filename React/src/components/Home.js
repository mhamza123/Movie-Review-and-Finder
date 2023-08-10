import Browse from "./Browse";
import useFetch from "./useFetch";
import '../styles/Home.css';

const Home = () => {
  const { error, isPending, data } = useFetch('http://localhost:8000/movie')

return (
    <div className="home">
      <div className="welcome">
        <h1>Welcome to HahaHollywood</h1>
        <p>Here you can review and search your favourite movies.</p>
        <p>Enjoy!</p>
      </div>
      <div className="browseMovies">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { movies && <Browse movies={movies} staticUrl={staticUrl} /> }
      </div>
    </div>
  );
}
 
export default Home;