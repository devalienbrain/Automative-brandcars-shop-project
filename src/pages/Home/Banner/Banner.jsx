import bannerImg from "../../../../public/Resources/banner2.jpg";

const Banner = ({ setDarkMode, isDarkMode }) => {
  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bannerImg})`,
        objectFit: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center">
        <div>
          <h1 className="mb-5 text-2xl md:text-5xl text-white font-black">
            CHOOSE FAVOURITE ONE AND BUY YOUR NEXT CLASSIC CAR
          </h1>
          <h3 className="mb-5 text-green-950 font-black">
            roadstar - the best car dealer in town
          </h3>
          <div className="py-10">
            <button
              className="border border-red-200 rounded-lg text-white px-6 py-2 font-semibold hover:bg-white hover:text-black"
              onClick={handleThemeToggle}
            >
              TOGGLE THEME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
