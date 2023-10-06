import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Services from "./Services";




const Home = () => {

    const services = useLoaderData();
    console.log(services)

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                {
                    services.map(service => <Services key={service.id} services={service}></Services>)
                }
            </div>

        </div>
    );
};

export default Home;

