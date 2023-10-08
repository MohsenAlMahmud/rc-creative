import Navbar from "./Navbar";


const EventBookingForm = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-4xl text-center py-16">Event Request Form</h2>
                <form className="w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">National Id</span>
                        </label>
                        <input type="text" name="id card" placeholder="Id number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Phone Number</span>
                        </label>
                        <input type="text" name="phone number" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Event Title</span>
                        </label>
                        <input type="text" name="name" placeholder="Tittle" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Event Category</span>
                        </label>
                        <div className="w-1/5">
                            <label className="label cursor-pointer">
                                <span className="label-text">Wedding</span>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Birthday Parties</span>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Anniversaries</span>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Engagement Parties</span>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Retirement Parties</span>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Baby Shower</span>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Location of Event</span>
                        </label>
                        <input type="text" name="name" placeholder="Location" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Event Date</span>
                        </label>
                        <input type="text" name="name" placeholder="Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Description of Event</span>
                        </label>
                        <textarea placeholder="Info" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>                  
                    
                    <div className="form-control mt-6 mb-10">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventBookingForm;