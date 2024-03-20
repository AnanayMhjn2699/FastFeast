import food from "../images/burger-image.png";

const About = () => {
  return (
    <div className="flex h-screen">
      <img src={food} alt="Burger's" className="h-[70%] " />
      <div className="justify-center ml-18 mt-10">
        <h1 className="font-bold text-3xl">
          Welcome to the world of <span>Tasty & Fresh Food</span>
          <br />
        </h1>
        <h4 className="text-center mt-3 text-lg">
          "Better you will feel if you eat a Fast
          <span className="text-[#E5B80B]">Feast</span>'s healthy meal"
        </h4>
      </div>
    </div>
  );
};

export default About;
