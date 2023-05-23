import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CarCart = ({ cars }) => {
    const { name, picture, price, model, rating } = cars;

    const notify = () => {
        toast.success("Added to wishlist")
    }
    return (
        <div data-aos="zoom-in-down"
            data-aos-duration="1000">
            <div className="card card-compact lg:w-96 w-4/5 mx-auto  h-[450px] bg-base-100 shadow-xl">
                <figure><img src={picture} /></figure>
                <div className="card-body font-bold">
                    <h1 className="text-[#004e96]">{model}</h1>
                    <h2 className="card-title">{name}</h2>
                    <p className="text-[18px] py-2">Price: $ <span className=" text-orange-400">{price}</span></p>
                    <p>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                    </p>
                    <div className="card-actions justify-end">
                        <button onClick={notify} className="btn gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            Wishlist
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCart;