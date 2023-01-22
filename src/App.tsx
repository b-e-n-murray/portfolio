import "./App.css";
import Carousel from "./components/Carousel";

function App(): JSX.Element {
  return (
    <>
      <h1 className="title">Portfolio</h1>
      <p className="header">Featured Projects</p>
      <Carousel />
    </>
  );
}

export default App;
