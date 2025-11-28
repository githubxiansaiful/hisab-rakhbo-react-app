import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};
export default Home;
