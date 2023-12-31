

const Gadget = ({ gadget }) => {

    const { name, img } = gadget;
    

    return (
        <div>
            
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="picture" className="rounded-xl object-cover w-48 h-36" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Gadget;