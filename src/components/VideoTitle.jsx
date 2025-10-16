const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-45 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold w-2/4">{title}</h1>
      <p className="py-4 text-md w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-5 text-sm  rounded-lg hover:bg-gray-400 transition">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-600 text-white p-2 px-5 text-sm hover:bg-white hover:text-black transition rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
