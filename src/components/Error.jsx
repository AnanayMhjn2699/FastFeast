import ErrorImage from "../images/404_Error.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  // used useRouteError as to access error data while routing
  const err = useRouteError();
  //console.log(err);
  return (
    <>
      <div className="absolute size-full">
        <img
          src={ErrorImage}
          alt="Error"
          className="size-full -z-10 opacity-40"
        />
      </div>
      <div className="absolute text-center ml-[25%]">
        <h1 className=" font-semibold mt-10 text-2xl">
          Oops! The restaurant you're looking for can't be found.
        </h1>
        <h3 className="text-lg mt-2">Error Code: {err.status}</h3>
        <h3 className="text-lg mt-2">{err.data}</h3>
        <button className="bg-teal-400 rounded mt-2 w-24 h-8">
          <Link to="/">Back Home</Link>
        </button>
      </div>
    </>
  );
};

export default Error;
