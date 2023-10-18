import bannerImg from "../../../../public/Resources/banner2.jpg";

const Banner = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
