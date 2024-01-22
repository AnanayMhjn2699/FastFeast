import food from "../images/burger-image.png";

const About = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <h1 className="font-bold">
          Welcome to The world of <span>Tasty & Fresh Food</span>
          <br />
        </h1>
        <h4>
          "Better you will feel if you eat a Fast<span>Feast</span> healthy
          meal"
        </h4>
      </div>
      <div className="">
        <img src={food} alt="Burger's " />
      </div>
    </div>
  );
};

export default About;
