import Content from "../components/Content";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import ProductData from "../utils/ProductData";

function Homepage() {
  return (
    <div className="homePage">
      <div>
        <Navbar />
        <Content/>
        <Featured/>
        <ProductData/>
      </div>
    </div>
  );
}

export default Homepage;
