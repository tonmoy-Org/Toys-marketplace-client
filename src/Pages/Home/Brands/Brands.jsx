import b1 from '../../../assets/brands/brands-1.jpg'
import b2 from '../../../assets/brands/brands-2.jpg'
import b3 from '../../../assets/brands/brands-3.jpg'
import b4 from '../../../assets/brands/brands-4.jpg'
import b5 from '../../../assets/brands/brands-5.jpg'

const Brands = () => {
    return (
        <div className='my-32 bg-gray-100 lg:p-16'>
            <div className='text-center' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <h1 className='text-4xl font-bold py-4 text-[#004e96]'>Our Brands</h1>
                <p className='py-2 pb-10'>When we say Horizon Hobby has the “best brands in the business” it isn’t just hyperbole. <br /> From Axial and ARRMA to E-flite, Dynamite, Spektrum, RealFlight and so more, the brands RC </p>
            </div>
            <div className='grid lg:grid-cols-5  w-4/5 gap-5 mx-auto lg:w-full' data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000">
                <div><img src={b1} alt="" /></div>
                <div><img src={b2} alt="" /></div>
                <div><img src={b3} alt="" /></div>
                <div><img src={b4} alt="" /></div>
                <div><img src={b5} alt="" /></div>
            </div>
        </div>
    );
};

export default Brands;