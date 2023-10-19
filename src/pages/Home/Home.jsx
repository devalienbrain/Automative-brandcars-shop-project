import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import FeatureCar from "./Features/FeatureCar";
import UserReviews from "./Reviews/UserReviews";
import CarBrands from "./Brands/CarBrands";

const Home = () => {
  const carBrandsData = useLoaderData();
  // console.log(carBrandsData);
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <div>
          <CarBrands carBrandsData={carBrandsData}></CarBrands>
        </div>
        <FeatureCar></FeatureCar>
        <div>
          <UserReviews></UserReviews>
        </div>
      </div>
    </div>
  );
};

export default Home;
