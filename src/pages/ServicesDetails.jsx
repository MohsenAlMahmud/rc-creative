import { useParams } from "react-router-dom";
import Navbar from "./Navbar";


const ServicesDetails = () => {

    const { id, name, img, description } = useParams();

    return (
        <div className="w-9/12 mx-auto">
            <Navbar></Navbar>
            <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{id}</p>
                    
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServicesDetails;