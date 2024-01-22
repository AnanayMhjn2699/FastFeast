import ErrorImage from "../images/404_Error.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  return (
    <div className="">
      <img src={ErrorImage} alt="Error" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="">{err.data}</h3>
      <h3 className="">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;
