const Shimmer = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex justify-between w-7xl m-auto flex-wrap">
      {arr.map((_, index) => (
        <p key={index} className="w-20 bg-gray-200 p-15 m-5 rounded-full"></p>
      ))}
    </div>
  );
};

export default Shimmer;
