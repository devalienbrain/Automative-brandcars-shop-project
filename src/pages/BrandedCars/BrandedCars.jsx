import { useLoaderData } from "react-router-dom";

const BrandedCars = () => {
  const brandedCars = useLoaderData();
  console.log(brandedCars);
  return <div>LOADING MAMA </div>;
};

export default BrandedCars;
