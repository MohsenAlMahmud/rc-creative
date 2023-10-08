import Navbar from "./Navbar";


const JobForm = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl text-center py-16">Apply Here</h2>
            <form className="w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" name="name" placeholder="First Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Last Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="text" name="phone number" placeholder="Phone Number" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Position Applying For</span>
                    </label>
                    <input type="text" name="name" placeholder="Post Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Additional Information</span>
                    </label>
                    <textarea placeholder="Info" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Upload Your CV Here</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover"></a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Other Testmonials (e.g Certificates)</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover"></a>
                    </label>
                </div>
                <div className="form-control mt-6 mb-10">
                    <button className="btn btn-primary">Submit CV</button>
                </div>
            </form>
        </div>
    );
};

export default JobForm;