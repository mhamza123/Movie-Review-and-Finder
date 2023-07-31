import Browse from "./Browse";
import useFetch from "./useFetch";
import './Home.css';

const Home = () => {
  const { error, isPending, data } = useFetch('http://localhost:8000/movie')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <Browse movies={data} /> }
    </div>
  );
}
 
export default Home;