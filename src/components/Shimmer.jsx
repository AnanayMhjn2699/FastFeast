const Shimmer = () => {
  return (
    <div className="mt-20 m-auto">
      <div className="flex flex-wrap gap-7 justify-center ">
        {Array(9)
          .fill("")
          .map((item, index) => {
            return (
              <div className=" animate-pulse w-64 h-96" key={index}>
                <div className="w-56 h-32 bg-gray-400 mb-3 rounded-md"></div>
                <div className="w-28 h-8 ml-14 bg-gray-400 mb-3"></div>
                <div className="w-56 h-8 bg-gray-400 mb-3"></div>
                <div className="flex w-56 h-5 gap-2 justify-between">
                  <div className="w-1/3 bg-gray-400"></div>
                  <div className="w-1/3"></div>
                  <div className="w-1/3 bg-gray-400"></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shimmer;
