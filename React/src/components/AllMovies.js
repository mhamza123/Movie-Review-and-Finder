import Browse from "./Browse";
import useFetch from "./useFetch";

const AllMovies = () => {
    const { error, isPending, data } = useFetch('http://localhost:8000/movie')

    return (
      <div className="home">
        <div style={{ display: "grid", alignContent: "center" }}>
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { data && <Browse movies={data} /> }
        </div>
      </div>
    );
}
 
export default AllMovies;