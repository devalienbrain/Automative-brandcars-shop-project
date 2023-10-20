const UpdateProduct = () => {
  const handleUpdateTheProduct = () => {};

  return (
    <div className="p-5 w-full lg:w-1/2 mx-auto">
      <h2 className="text-3xl text-green-900 text-center font-black">
        UPDATE THE PRODUCT
      </h2>
      <p className="text-center text-red-600">
        <small>product id: </small>
      </p>
      <form onSubmit={handleUpdateTheProduct}>
        {/* form */}
        <div className="mb-8">
          {/* 1_image field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="product image url"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 2_name field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="product name"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 3_brand name field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="brand name"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 4_type field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="type of the product"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 5_price field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="price of the product"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 6_short description field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="short description of the product"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 7_rating field */}
          <div className="mb-8 form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Ratings</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ratings"
                placeholder="product rating"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* SUBMIT BUTTON */}
          <div className="form-control w-full">
            <input
              type="submit"
              value="UPDATE"
              className="px-8 py-3 text-white border bg-green-800 hover:bg-green-700 rounded-xl drop-shadow-2xl font-bold text-xl"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
