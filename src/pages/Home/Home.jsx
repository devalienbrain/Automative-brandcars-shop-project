import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import FeatureCar from "./Features/FeatureCar";
import UserReviews from "./Reviews/UserReviews";
import CarBrands from "./Brands/CarBrands";
import { useState } from "react";

const Home = () => {
  const carBrandsData = useLoaderData();
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`bg-${isDarkMode ? "black" : "white"} text-${
        isDarkMode ? "white" : "black"
      }`}
    >
      <Banner setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <div className="container mx-auto">
        <div>
          <CarBrands carBrandsData={carBrandsData} />
        </div>
        <FeatureCar />
        <div>
          <UserReviews />
        </div>
      </div>
    </div>
  );
};

export default Home;
