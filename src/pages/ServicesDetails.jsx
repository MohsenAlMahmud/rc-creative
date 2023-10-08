import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";


const ServicesDetails = () => {

    const services = useLoaderData();
    const { id } = useParams();
    const service = services.find(service => service.id == id);
    console.log(service)



    return (
        <div className="w-9/12 mx-auto">
            <Navbar></Navbar>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={service.img} alt="picture" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{service.name}</h2>
                        <p>{service.description}</p>
                        
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ServicesDetails;