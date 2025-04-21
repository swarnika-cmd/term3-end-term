import Movie from "./Movie";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="container">
        {/* Hi my name is Swarnika */}
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;