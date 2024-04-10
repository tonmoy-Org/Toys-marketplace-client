import moment from 'moment';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import car9 from '../../../assets/car/car-9.jpg'
import car8 from '../../../assets/car/car-8.jpg'
import car7 from '../../../assets/car/car-7.jpg'
import car6 from '../../../assets/car/car-6.jpg'
import car5 from '../../../assets/car/car-5.jpg'

const Banner = () => {
    return (
        <div className="text-white pt-20">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="w-full h-full" src={car5} alt="" />
                    <div className="px-32 space-y-4 lg:visible invisible absolute bottom-28">
                        <h1 className="text-3xl">Charge, Bash, Repeat</h1>
                        <p className="md:w-2/3">Electric vehicles combine incredible acceleration and speed with charge and go convenience!</p>
                        <p>Pre-Orders Due {moment().format('l')}</p>
                        <br />
                        <button className="btn glass">Order Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={car6} alt="" />
                    <div className="px-32 space-y-4 lg:visible invisible absolute bottom-28 ">
                        <h1 className="text-3xl">Blade 150 FX RTF</h1>
                        <p className="md:w-2/3">The Blade 150 FX is the perfect indoor and outdoor helicopter for beginner pilots ready to try single-rotor machines from coaxial helicopters and multirotor drones.</p>
                        <p>Pre-Orders Due {moment().format('l')}</p>
                        <br />
                        <button className="btn glass">Order Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={car7} alt="" />
                    <div className="px-32 space-y-4 lg:visible invisible absolute bottom-28">
                        <h1 className="text-3xl">Shop Airplanes by Skill Level</h1>
                        <p className="md:w-2/3">Explore the world of flight with aircraft covering all skill levels. Models featuring exclusive AS3X and SAFE technology make learning to fly even easier!</p>
                        <p>Pre-Orders Due {moment().format('l')}</p>
                        <br />
                        <button className="btn glass">Order Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={car8} alt="" />
                    <div className="px-32 space-y-4 lg:visible invisible absolute bottom-28">
                        <h1 className="text-3xl">In Stock & Ready for Patrol</h1>
                        <p className="md:w-2/3">The new Pro Boat 1/25 scale PCF Mk I boat is ready-to-run and filled with display-worthy detail for Vietnam vets and history buffs to admire!</p>
                        <p>Pre-Orders Due {moment().format('l')}</p>
                        <br />
                        <button className="btn glass">Order Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <img className="w-full" src={car9} alt="" />
                    <div className="px-32 space-y-4 lg:visible invisible absolute bottom-28">
                        <h1 className="text-3xl ">40% Savings Has Returned!</h1>
                        <p className="md:w-2/3">Back by popular demand save up to 40% on Athearn locomotives and rolling stock! There has never been a better time to add to your roster!</p>
                        <p>Pre-Orders Due {moment().format('l')}</p>
                        <br />
                        <button className="btn glass">Order Now</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;