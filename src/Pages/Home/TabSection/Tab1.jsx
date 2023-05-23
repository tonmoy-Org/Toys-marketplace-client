import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AuthContext } from '../../../providers/AuthProvider';

const Tab1 = ({ toy1 }) => {
    const { _id, toy_name, img, price, rating } = toy1;
    const { user } = useContext(AuthContext);

    const handleNotify = () => {
        if (!user) {
            Swal.fire({
                title: 'You have to log in first to view details',
                text: 'Without a login, you can not visit the single toy details page',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
    return (
        <div className="my-8" data-aos="flip-right"
            data-aos-duration="1500">
            <div className="card card-compact lg:w-96 w-4/5 mx-auto  h-[450px] bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p className='text-xl'>Price: $<span className=' text-orange-400'>{price}</span></p>
                    <p><Rating
                        style={{ maxWidth: 110 }}
                        value={rating}
                        readOnly />
                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/toyDetails/${_id}`}><button onClick={handleNotify} className="btn btn-sm">VIEW DETAILS </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab1;