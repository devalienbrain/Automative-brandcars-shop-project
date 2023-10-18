import featuresImg from "../../../../public/Resources/banner1.jpg";
const Features = () => {
  return (
    <div className="text-center bg-green-50 p-5">
      <h3 className="text-3xl font-black text-green-950 pb-4">
        Our Feature Car Of This Week
      </h3>
      <div>
        <img className="mx-auto w-full " src={featuresImg} alt="" />
      </div>
    </div>
  );
};

export default Features;
