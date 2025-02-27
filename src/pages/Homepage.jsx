import Content from "../components/Content";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div className="homePage">
      <div>
        <Navbar />
        <Content/>
        <Featured/>
      </div>
    </div>
  );
}

export default Homepage;
