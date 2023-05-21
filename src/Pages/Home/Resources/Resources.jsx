import r1 from '../../../assets/recourse/r1.jpg'
import r2 from '../../../assets/recourse/r2.jpg'
import r3 from '../../../assets/recourse/r3.jpg'

const Resources = () => {
    return (
        <div className='mb-16'>
            <div className="text-center my-20" data-aos="fade-up"
                data-aos-duration="1000">
                <h1 className="text-4xl font-bold text-[#004e96]">Get the Most out of Your Hobby</h1>
                <br />
                <p>
                    Invest in your RC Airplane, RC Car or Truck, RC Heli, <br /> RC Boat or RC Accessory with resources from Horizon Hobby.
                </p>
            </div>
            <div>
                <div className="grid lg:grid-cols-3 gap-8 w-4/5 mx-auto bg-gray-100 p-8">
                    <div className="">
                        <figure><img data-aos="zoom-in-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" src={r1} alt="Shoes" /></figure>
                        <div className="py-12" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="1000">
                            <h2 className="card-title">My Bench</h2>
                            <p>Log in to your account to create and save custom build projects to My Bench, using Part Finder.</p>
                            <div className="pt-6">
                                <button className="btn btn-outline btn-primary">Create Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <figure><img data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" src={r2} alt="Shoes" /></figure>
                        <div className="py-12" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="1000">
                            <h2 className="card-title">Part Finder</h2>
                            <p>Search for parts and accessories to complete or upgrade your product.</p>
                            <div className="pt-6">
                                <button className="btn btn-outline btn-primary">Search Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <figure><img data-aos="zoom-in-left"
                            data-aos-easing="ease-in-sine" src={r3} alt="Shoes" /></figure>
                        <div className="py-12" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="1000">
                            <h2 className="card-title">Product Registration</h2>
                            <p>Register your products with us! Log in to your account to get started.</p>
                            <div className="pt-6">
                                <button className="btn btn-outline btn-primary">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;