import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Services from "./Services";




const Home = () => {

    const services = useLoaderData();
    console.log(services)

    return (
        <div className="w-9/12 mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-4 w-full mx-auto mt-12">
                {
                    services.map(service => <Services key={service.id} services={service}></Services>)
                }
            </div>

        </div>
    );
};

export default Home;

