import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CarBrandCard = ({ carBrandData }) => {
  // console.log(carBrandData);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const { name, image } = carBrandData || {};
  return (
    <div
      className="rounded-lg flex flex-col border border-red-100 bg-red-50 drop-shadow-2xl"
      data-aos="fade"
    >
      <img
        className="rounded-t-lg w-full h-64 border border-red-100"
        src={image}
        alt="Alternative Image"
      />
      <div className="p-4 text-center md:text-left">
        <h3 className="text-3xl text-center font-black text-red-800 mb-3">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CarBrandCard;
