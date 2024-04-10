
const CarCart = ({ cars }) => {
    const { image } = cars;

    
    return (
        <div data-aos="zoom-in-down"
            data-aos-duration="1000">
            <div className="shadow-xl">
                <figure><img className="w-full" src={image} /></figure>
            </div>
        </div>
    );
};

export default CarCart;