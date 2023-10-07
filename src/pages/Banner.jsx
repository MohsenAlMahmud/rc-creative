import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/bHHMf5G/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold text-white">RC Creative</h1>
                        <p className="text-4xl mb-5 text-white">WE KEEP YOUR MEMORIES ALIVE....</p>
                        <Link to={'/services'}><button className="btn btn-primary">Our Services</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;