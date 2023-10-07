

const Gadget = ({ gadget }) => {

    const { name, img } = gadget;
    console.log(name)

    return (
        <div>
            
            <div className=" card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="picture" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Gadget;