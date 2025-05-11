const Card = () => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md shadow-md rounded-lg p-4 border relative hover:bg-white/15 transition-all ease-in-out flex flex-col border-white/20 hover:border-white/30 animate-pulse`}
    >
      <div className="relative">
        <div className="w-full h-48 rounded-md bg-gray-500/50"></div>
      </div>

      <div className="grow">
        <div className="w-full h-7 rounded-md bg-gray-500/50 my-3" />
        <p className="text-gray-300 flex items-center justify-between text-sm">
          <div className="w-40 h-6 rounded-md bg-gray-500/50 mb-2" />
          <div className="w-20 h-6 rounded-md bg-gray-500/50 mb-2" />
        </p>
        <p className="text-gray-300 flex items-center justify-between text-sm">
          <div className="w-40 h-6 rounded-md bg-gray-500/50 mb-2" />
          <div className="w-20 h-6 rounded-md bg-gray-500/50 mb-2" />
        </p>
        <p className="text-gray-300 flex items-center justify-between text-sm">
          <div className="w-40 h-6 rounded-md bg-gray-500/50 mb-2" />
          <div className="w-20 h-6 rounded-md bg-gray-500/50 mb-2" />
        </p>
        <div className="w-full h-[2.875rem] rounded-md bg-gray-500/50 mt-3" />
      </div>
    </div>
  );
};

export default Card;
