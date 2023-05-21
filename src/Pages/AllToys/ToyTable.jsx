import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const ToyTable = ({ toys, index }) => {
    const { user } = useContext(AuthContext);
    const { _id, sellerName, toy_name, category, price, quantity } = toys;

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
        <tr>
            <th>{index}</th>
            <th>{sellerName}</th>
            <th>{toy_name}</th>
            <th>{category}</th>
            <th>${price}</th>
            <th>{quantity}</th>
            <th>
                <Link to={`/toyDetails/${_id}`}><button onClick={handleNotify} className="btn btn-sm">VIEW DETAILS </button></Link>
            </th>
        </tr>
    );
};

export default ToyTable;