const CartCard = ({ cartItem }) => {
  console.log(cartItem);
  const { image, name, type, brand, price } = cartItem;
  return (
    <div className="flex flex-col md:flex-row p-3 my-5 border border-green-900 rounded-md">
      <div className="flex-1">
        <img src={image} alt="Loading" />
      </div>
      <div className="flex-1 text-green-950 font-semibold text-lg">
        <div className="text-center md:text-left">
          <p>{name}</p>
          <p>Brand: {brand}</p>
          <p>{type}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
