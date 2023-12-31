import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Navbar from "./Navbar";




const Services = () => {

  const services = useLoaderData();
  console.log(services)


  return (
    <div className="w-9/12 mx-auto">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 w-full mx-auto mt-12">
        {
          services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;