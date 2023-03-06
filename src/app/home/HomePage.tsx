import Header from "../component/header/Header";
import Sections from "./component/sections/Sections";
import Services from "./component/services/Services";
import Slider from "./component/slider/Slider";
import Start from "./component/start/Start";

const HomePage = () => {
  return (
    <div className="app">
      <Header />
      <Slider />
      <Sections />
      <Services />
      <Start />
    </div>
  );
};

export default HomePage;
