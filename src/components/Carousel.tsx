import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carousel(): JSX.Element {
  return (
    <div className="all-carousel">
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={20}
        totalSlides={4}
        currentSlide={0}
        isPlaying={true}
        interval={5000}
        className="carousel"
      >
        <Slider>
          <Slide index={0} className="slide">
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
            </div>
          </Slide>
          <Slide index={1} className="slide">
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
          <Slide index={2} className="slide">
            <div className="proj-item"></div>
            <img
              className="app-icons"
              src="https://cdn-icons-png.flaticon.com/512/2769/2769646.png"
              alt="scissors"
            ></img>
            <a className="proj-titles" href="https://snip-snap-pro.netlify.app/">
              SnipSnap
            </a>
          </Slide>
          <Slide index={3} className="slide">
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
              To-Do App
            </a>
          </Slide>
        </Slider>
        <ButtonBack className="car-btn">Back</ButtonBack>
        <Dot slide={0}></Dot>
        <Dot slide={1}></Dot>
        <Dot slide={2}></Dot>
        <Dot slide={3}></Dot>
        <ButtonNext className="car-btn">Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;
