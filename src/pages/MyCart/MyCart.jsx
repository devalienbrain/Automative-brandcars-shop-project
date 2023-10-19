import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";

const MyCart = () => {
  const cartItems = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="w-full md:w-3/4 p-3 my-5 mx-auto bg-green-100 rounded-md">
        <h1 className="text-center text-3xl font-bold text-green-900">
          CART ITEMS
        </h1>
        <div>
          {cartItems.map((cartItem) => (
            <CartCard key={cartItem._id} cartItem={cartItem}></CartCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
