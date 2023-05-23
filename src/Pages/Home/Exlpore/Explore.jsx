import ex1 from '../../../assets/explore/ex-1.jpg'
import ex2 from '../../../assets/explore/ex-2.jpg'
import ex3 from '../../../assets/explore/ex-3.jpg'

const Explore = () => {
    return (
        <div className='mt-52 mb-32 max-w-screen-xl mx-auto space-y-20 px-4'>
            <div className="text-center mt-28" data-aos="fade-down"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000">
                <h1 className="text-4xl font-bold text-[#004e96]">Shop RC Buying Guides</h1>
                <br />
                <p>
                    Shop through our selection of buying guides and top featured product.

                </p>
            </div>
            <div className='lg:flex gap-10'>
                <img src={ex1} alt="" />
                <div className='mt-10 space-y-4 mb-16' data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                    <h1 className='font-semibold text-3xl text-[#004e96]'>Learn to Fly RC Planes</h1>
                    <p className='w-4/5'>Begin your pilots journey here! What is an RC Trainer and which RC Trainer is right for you? Discover this and more at our Learn to Fly RC Planes landing page.</p>
                    <button className="btn btn-wide bg-[#004e96]">Learn To Fly</button>
                </div>
            </div>
            <div className='lg:flex gap-10'>

                <div className='mt-10 space-y-4 mb-10'
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                    <h1 className='font-semibold text-3xl text-[#004e96]'>RC Basher Finder</h1>
                    <p className='w-4/5'>RC driving is often divided into two types: racing and bashing. Racers like rules. For RC bashers, anything goes. Almost any RC car or truck can be a basher model, the sturdier the better. Run it fearlessly into the rough, through spins and sprints, jumps and wheelies, endurance tests of all kinds…just you and your RC basher against the world.</p>
                    <button className="btn btn-wide bg-[#004e96]">Get Started</button>
                </div>
                <img src={ex2} alt="" />
            </div>
            <div className='lg:flex gap-10'>
                <img src={ex3} alt="" />
                <div className='mt-10 space-y-4'
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                    <h1 className='font-semibold text-3xl text-[#004e96]'>Spektrum Smart Technology</h1>
                    <p className='w-4/5'>Get peak performance out of your favorite models - Spektrum Smart Technology is about offering a higher connection to your hobby. Its a connection that puts you in complete control, makes you more aware and more confident about the capability of your equipment—all while making vital components of your model easier to use than ever.</p>
                    <button className="btn btn-wide bg-[#004e96]">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Explore;