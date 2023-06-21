import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyTable from "./MyToyTable";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Title from "../../hooks/Title";

const MyToy = () => {
    Title('My Toys')
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortField, setSortField] = useState('price');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        const url = `https://toys-marketplace-server-neon.vercel.app/addToys?email=${user?.email}&sort=${sortField}&order=${sortOrder}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    }, [user?.email, sortField, sortOrder]);

    const handleDeleteToy = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toys-marketplace-server-neon.vercel.app/addToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const restToys = toys.filter(toy => toy._id !== id);
                            setToys(restToys);
                        }
                    });
            }
        });
    };

    const handleSortChange = event => {
        const value = event.target.value;
        const [field, order] = value.split('-');
        setSortOrder(order);
        setSortField(field);
    };

    return (
        <div className="lg:mx-12 my-10">
            <div className="text-center">
                <h1 className="text-4xl  text-[#004e96] font-bold">My Toys</h1>
                <p className="py-4">Get peak performance out of your favorite models - Spektrum Smart Technology is <br /> about offering a higher connection to your hobby.</p>
            </div>
            <div className="overflow-x-auto w-full text-right ">
                <div className="mb-4 my-10">
                    <label className="mr-2 text-xl font-medium">Sort By:</label>
                    <select
                        className="px-5 py-1 border rounded"
                        value={`${sortField}-${sortOrder}`}
                        onChange={handleSortChange}
                    >
                        <option className=" font-semibold" value="price-desc">Price Ascending</option>
                        <option className=" font-semibold" value="price-asc">Price Descending</option>

                    </select>
                </div>
                <table className="table w-full mt-10">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Seller Name / Email</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available Quantity</th>
                            <th>Description</th>
                            <th>Update button</th>
                            <th>Delete button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, index) => (
                            <MyToyTable
                                key={toy._id}
                                toy={toy}
                                index={index + 1}
                                handleDeleteToy={handleDeleteToy}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;
