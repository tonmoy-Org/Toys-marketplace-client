import ex1 from '../../../assets/recourse/ex-1.jpg'

const Explore = () => {
    return (
        <div className='my-32 w-4/5  mx-auto'>
            <div className='text-center' data-aos="fade-up">
                <h1 className='text-4xl font-bold text-[#004e96]'>Explore RC Cars, RC Airplanes, and More!</h1>
                <p className='py-3'>
                    RC (Radio-Controlled) vehicles and aircraft are popular hobbies  <br /> enjoyed by enthusiasts of all ages. They provide an exciting way to  <br /> experience the thrill of controlling a miniature vehicle
                </p>
            </div>
            <div style={{ backgroundImage: `url(${ex1})`, backgroundRepeat: 'no-repeat', height: '500px' }} className="text-white  relative mt-10">
                <div className='absolute bottom-24 lg:left-20 left-4' data-aos="fade-right"
          
                    data-aos-easing="ease-in-sine">
                    <h1 className='text-3xl'>Discover Whats New</h1>
                    <p className='py-5  '>Check out the new RC Cars, Trucks, Airplanes, Helicopters and Accessories <br /> from Horizon Hobby. All backed by the best service the hobby has to offer.</p>
                    <button className="btn glass">Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default Explore;