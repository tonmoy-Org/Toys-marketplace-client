import { useEffect, useState } from "react";
import CarCart from "./CarCart";

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch('https://toys-marketplace-server-neon.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    return (
        <div>
            <div className="text-center mt-28" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000">
                <h1 className="text-4xl font-bold text-[#004e96]">Cars Gallery</h1>
                <br />
                <p className="text-sm px-5">
                    RC cars come in a variety of shapes and sizes, and can be made to look like real cars, <br />  trucks, boats, or even airplanes. They can be simple or complex, and can be used by people of all ages.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-5 gap-3 max-w-screen-xl my-10 mx-3">
                {
                    gallery.map(cars =>
                        <CarCart
                            key={cars._id}
                            cars={cars}
                        ></CarCart>)
                }
            </div>
        </div>
    );
};

export default Gallery;