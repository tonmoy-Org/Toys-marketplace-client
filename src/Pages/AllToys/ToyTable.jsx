import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Rating } from "@smastrom/react-rating";

const ToyTable = ({ toys }) => {
    const { user } = useContext(AuthContext);
    const { _id, toy_name, price, img } = toys;
    console.log(toys)

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
        <div>
            <div className="card card-compact lg:w-72 w-4/5 mx-auto  h-[350px] bg-base-100 shadow-xl rounded-none">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p className='text-xl'>Price: $<span className=' text-orange-400'>{price}</span></p>
                    <p><Rating
                        style={{ maxWidth: 110 }}
                        value={3}
                        readOnly />
                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/toyDetails/${_id}`}><button onClick={handleNotify} className="btn btn-sm rounded-none">VIEW DETAILS </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyTable;