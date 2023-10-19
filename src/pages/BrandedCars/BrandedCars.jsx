import { useLoaderData, useParams } from "react-router-dom";
import BrandedCarCard from "./BrandedCarCard";

const BrandedCars = () => {
  const brandedCars = useLoaderData();
  const { name } = useParams();
  // console.log(brandedCars, name);
  const filteredBrandedCars = brandedCars.filter((brandedCar) => {
    // console.log(brandedCar.brand);
    return name === brandedCar.brand;
  });
  return (
    <>
      {" "}
      <div className="text-center my-10  container mx-auto">
        <h3 className="text-4xl font-black text-green-950">
          OUR {name} BRAND CARS
        </h3>
        <div className="py-9 grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredBrandedCars.map((brandedCar) => (
            <BrandedCarCard
              key={brandedCar._id}
              brandedCar={brandedCar}
            ></BrandedCarCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandedCars;
