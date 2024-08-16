const ProductImage = () => {
  return (
    <div className="md:w-9/12 mx-auto w-9/12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2  gap-5 mt-8 z-10">
      <div className="overflow-hidden rounded-lg">
        <img
          src="https://i.ibb.co/mR0yY45/product-One.jpg"
          alt=""
          className="transform hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-lg"
        />
      </div>
      <div className="overflow-hidden rounded-lg">
        <img
          src="https://i.ibb.co/VMjPwhK/imageTwo.jpg"
          alt=""
          className="transform hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-lg"
        />
      </div>
      <div className="overflow-hidden rounded-lg">
        <img
          src="https://i.ibb.co/TR3MfN9/image-Tree.jpg"
          alt=""
          className="transform hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-lg"
        />
      </div>
    </div>
  );
};

export default ProductImage;
