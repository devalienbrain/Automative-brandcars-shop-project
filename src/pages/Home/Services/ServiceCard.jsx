const ServiceCard = ({ serviceData }) => {
  // console.log(serviceData);
  const { name, image } = serviceData || {};
  return (
    <div className="rounded-lg flex flex-col border border-red-200 bg-red-100 drop-shadow-2xl">
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

export default ServiceCard;
