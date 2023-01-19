import "./App.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

function App(): JSX.Element {
  return (
    <>
      <h1 className="title">Portfolio</h1>
      <CarouselProvider
        naturalSlideWidth={20}
        naturalSlideHeight={1}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div className="proj-item">
              <img
                className="app-icons"
                src="https://static.thenounproject.com/png/1925938-200.png"
                alt="gymbuddy"
              ></img>
              <a
                className="proj-titles"
                href="https://b-e-n-murray-gym-buddy.netlify.app/"
              >
                Gym-Buddy
              </a>
            </div></Slide>
          <Slide index={1}>
            <div className="proj-item">
              <img
                className="app-icons"
                src="https://icons.veryicon.com/png/o/animal/pet-icon/dog-24.png"
                alt="dog"
              ></img>
              <a
                className="proj-titles"
                href="https://dog-breed-voter-mtkb.netlify.app/"
              >
                Dog Breed Voting
              </a>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="proj-item"></div>
            <img
              className="app-icons"
              src="https://cdn-icons-png.flaticon.com/512/2769/2769646.png"
              alt="scissors"
            ></img>
            <a
              className="proj-titles"
              href="https://snip-snap-pro.netlify.app/"
            >
              SnipSnap
            </a>
          </Slide>
          <Slide index={2}>
            <div className="proj-item"></div>
            <img
              className="app-icons"
              src="https://cdn-icons-png.flaticon.com/512/282/282163.png"
              alt="notepad"
            ></img>
            <a
              className="proj-titles"
              href="https://b-e-n-murray-todo-react.netlify.app/"
            >
              SnipSnap
            </a>
          </Slide>
        </Slider>
         <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </>
  );
}

export default App;
