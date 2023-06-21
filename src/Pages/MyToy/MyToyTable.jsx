import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const MyToyTable = ({ toy, handleDeleteToy }) => {
    const { user } = useContext(AuthContext);
    const { _id, sellerName, email, toy_name, img, category, price, quantity, rating, description } = toy;


    const handleUpdateToys = event => {
        event.preventDefault();
        const from = event.target;
        const price = from.price.value;
        const quantity = from.quantity.value;
        const description = from.description.value;

        const updateToysInfo = { price, quantity, description };
        console.log(updateToysInfo);

        fetch(`https://toys-marketplace-server-neon.vercel.app/addToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToysInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Successfully Updated Car Information',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-28 h-28">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </td>
            <td> <div className="font-bold">{toy_name}</div></td>
            <td>
                <div className="font-bold">{sellerName}</div>
                <div className="text-sm opacity-50">{email}</div>
            </td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <th>

                <label htmlFor="my-modal-5" className="btn btn-ghost btn-xs text-green-600">Update</label>


                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-6xl">
                        <h1 className="text-center lg:text-3xl text-2xl my-6 font-semibold">Update Toy Information</h1>
                        <div className="w-9/12 mx-auto border-2 lg:p-3 p-2 my-10">
                            <form onSubmit={handleUpdateToys}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller name</span>
                                        </label>
                                        <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="seller name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="text" defaultValue={user?.email} name="sellerEmail" placeholder="seller Email" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="price" className="input input-bordered" required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input type="text" name="quantity" placeholder="available quantity" className="input input-bordered" />
                                    </div>

                                </div>
                                <div className="grid grid-cols-1 mb-10 gap-10">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Detail description</span>
                                        </label>
                                        <input type="text" name="description" placeholder="detail description" className="input input-bordered" />
                                    </div>

                                </div>
                                <div className="mb-10">
                                    <input className="btn btn-block" type="submit" value="Update A Toy" />

                                </div>
                            </form>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">Back</label>
                        </div>
                    </div>
                </div>
            </th>
            <th>
                <Link><button onClick={() => handleDeleteToy(_id)} className="btn btn-ghost btn-xs text-red-600">Delete</button></Link>
            </th>
        </tr>
    );
};


export default MyToyTable;