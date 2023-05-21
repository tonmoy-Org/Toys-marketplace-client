import car1 from '../../../assets/car/car-1.jpg'
import car2 from '../../../assets/car/car-2.jpg'
import car3 from '../../../assets/car/car-3.jpg'
import car4 from '../../../assets/car/car-4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full" style={{ height: '580px' }}>
                <div className="relative w-full">
                    <img src={car4} className="w-full brightness-75" style={{ height: '580px' }} />
                    <div className="absolute bottom-1/4 lg:left-32 left-4">
                        <h2 className="text-white  md:text-5xl text-3xl mb-4 font-bold">MegaMoto GTR</h2>
                        <p className="text-white font-semibold">These names are designed to evoke a sense of speed, power,  and excitement commonly <br /> associated with RC cars.</p>
                        <button className="btn glass mt-4">Explore Now</button>
                    </div>
                </div>
                <div className='hidden sm:hidden md:hidden lg:inline-block'>
                    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full" style={{ height: '580px' }}>
                <div className="relative w-full">
                    <img src={car2} className="w-full brightness-75" style={{ height: '580px' }} />
                    <div className="absolute bottom-1/4 lg:left-32 left-4">
                        <h2 className="text-white  md:text-5xl text-3xl mb-4 font-bold">ThunderBolt RDX</h2>
                        <p className="text-white font-semibold">These names are designed to evoke a sense of speed, power,  and excitement commonly <br /> associated with RC cars.</p>
                        <button className="btn glass mt-4">Explore Now</button>
                    </div>
                </div>
                <div className='hidden sm:hidden md:hidden lg:inline-block'>
                    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full" style={{ height: '580px' }}>
                <div className="relative w-full">
                    <img src={car3} className="w-full brightness-75" style={{ height: '580px' }} />
                    <div className="absolute bottom-1/4 lg:left-32 left-4">
                        <h2 className="text-white  md:text-5xl text-3xl mb-4 font-bold">FlashFire SRT</h2>
                        <p className="text-white font-semibold">These names are designed to evoke a sense of speed, power,  and excitement commonly <br /> associated with RC cars.</p>
                        <button className="btn glass mt-4">Explore Now</button>
                    </div>
                </div>
                <div className='hidden sm:hidden md:hidden lg:inline-block'>
                    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full" style={{ height: '580px' }}>
                <div className="relative w-full">
                    <img src={car1} className="w-full brightness-75" style={{ height: '580px' }} />
                    <div className="absolute bottom-1/4 lg:left-32 left-4">
                        <h2 className="text-white  md:text-5xl text-3xl mb-4 font-bold">TurboRacer X9</h2>
                        <p className="text-white font-semibold">These names are designed to evoke a sense of speed, power,  and excitement commonly <br /> associated with RC cars.</p>
                        <button className="btn glass mt-4">Explore Now</button>
                    </div>
                </div>
                <div className='hidden sm:hidden md:hidden lg:inline-block'>
                    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;