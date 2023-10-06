


const Services = ({ services }) => {
  const { name, img, description, price } = services;


  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <figure><img src={img} alt="picture" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;