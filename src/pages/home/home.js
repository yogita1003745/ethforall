import Navbar from "../../components/navbar/navbar";
import "./home.css";
function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <h1 className="title">EthforAll Hackerthon </h1>
        <p className="description">
          The latest edition of the ETHIndia Online Series, ETHForAll is here!
          With this event, we’re shining the spotlight on leveraging crypto
          protocols to solve for the greater good.
          <br /> One which creates for a more positive sum future by solving for
          the most pertinent issues in our society.
        </p>
      </div>
    </>
  );
}

export default Home;
