import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { id, name, img, description, price } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;