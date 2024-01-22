const Shimmer = () => {
  return (
    <div className="mt-16 m-auto">
      <div className="flex flex-wrap gap-7 justify-center ">
        {Array(9)
          .fill("")
          .map((item, index) => {
            return (
              <div className=" animate-pulse w-64 h-96" key={index}>
                <div className="w-64 h-44 bg-gray-400 mb-3"></div>
                <div className="w-64 h-8 bg-gray-400 mb-3"></div>
                <div className="w-3/4 h-8 bg-gray-400 mb-3"></div>
                <div className="flex w-64 h-5 gap-2 justify-between">
                  <div className="w-1/3 bg-gray-400"></div>
                  <div className="w-1/3 bg-gray-400"></div>
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
