import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Gadget from "./Gadget";
// import OurEvents from "./OurEvents";
import WhyChooseUs from "./WhyChooseUs";
import Feedback from "./Feedback";





const Home = () => {

    const gadgets = useLoaderData();

    return (
        <div className="w-9/12 mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                <h2 className="text-5xl font-bold text-center my-5">Our Popular Event Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 my-5">

                    {
                        gadgets.map(gadget => <Gadget key={gadget.id} gadget={gadget}></Gadget>)
                    }
                </div>
            </div>
            

            {/* <OurEvents></OurEvents> */}
            <WhyChooseUs></WhyChooseUs>
            <Feedback></Feedback>
            <Footer></Footer>


        </div>
    );
};

export default Home;

