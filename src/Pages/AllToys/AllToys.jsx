import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";
import { useState } from "react";
import Title from "../../hooks/Title";

const AllToys = () => {
    Title('ALLToys')
    const allToys = useLoaderData();
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(true);

    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value;
        setIsSearching(true);

        fetch(`https://toys-marketplace-server-neon.vercel.app/addToys?toy_name=${searchValue}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchResults(data);
                setIsSearching(false);
            });
    };

    const renderTableData = () => {
        const dataToRender = isSearching ? allToys : searchResults;
        return dataToRender.map((toys, index) => (
            <ToyTable key={toys._id} toys={toys} index={index + 1} />
        ));
    };

    return (
        <div className="lg:mx-20 my-16">
            <div className="text-center">
                <h1 className="text-4xl  text-[#004e96] font-bold">All Toys</h1>
                <p className="py-4">Get peak performance out of your favorite models - Spektrum Smart Technology is <br /> about offering a higher connection to your hobby.</p>
            </div>
            <div className="grid lg:grid-cols-2 lg:space-x-64 my-14">
                <h1 className="mx-10 text-2xl text-[#004e96] font-semibold py-4">
                    Search Your Favorite Toys
                </h1>
                <div className="">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input className="btn btn-success text-white" type="submit" value="Search" />
                    </form>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details button</th>
                        </tr>
                    </thead>
                    <tbody>{renderTableData()}</tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
