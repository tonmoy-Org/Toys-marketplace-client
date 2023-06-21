import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import Title from "../../hooks/Title";

const AddToy = () => {
    Title('Add Toy')
    const { user } = useContext(AuthContext);


    const handleAddToy = (event) => {
        event.preventDefault();
        const from = event.target;
        const photo = from.photo.value;
        const name = from.name.value;
        const sellerName = user?.displayName;
        const email = user?.email;
        const category = from.category.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const quantity = from.quantity.value;
        const description = from.description.value;

        const addToys = {
            img: photo,
            toy_name: name,
            sellerName: sellerName,
            email,
            price: price,
            category: category,
            rating: rating,
            quantity: quantity,
            description: description,
        }

        fetch('https://toys-marketplace-server-neon.vercel.app/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Successfully Add Toys',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })

    }
    return (
        <div>
            <div className="text-center my-8">
                <h1 className="text-4xl  text-[#004e96] font-bold">Add Toys</h1>
                <p className="py-4">Get peak performance out of your favorite models - Spektrum Smart Technology is <br /> about offering a higher connection to your hobby.</p>
            </div>
            <div className="w-9/12 mx-auto border-dashed border-2 border-[#004e96] p-10 my-10">
                <h1 className="text-center text-3xl my-6 font-semibold text-[#004e96]">Toy Information</h1>
                <form onSubmit={handleAddToy}>
                    <div className="grid grid-cols-1 lg:grid-cols-1 mb-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required/>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
                        </div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input type="text" name="category" placeholder="sub-category" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="price" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                        </div>

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="available quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <input type="text" name="description" placeholder="detail description" className="input input-bordered" />
                        </div>

                    </div>
                    <div className="mb-10">
                        <input className="btn btn-block bg-[#004e96]" type="submit" value="Add A Toy" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;