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
        <div className="py-28 px-6 bg-base-100">
            <div className="text-center">
                <h1 className="text-4xl  text-[#004e96] font-bold">All Toys</h1>
                <p className="py-4">Get peak performance out of your favorite models - Spektrum Smart Technology is <br /> about offering a higher connection to your hobby.</p>
            </div>
            <div className="flex justify-between items-center bg-base-200    p-2 my-5">
                <h1 className="text-2xl font-semibold  text-[#004e96]">Search Your Favorite Toys</h1>
                <form className="flex" onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Type here"
                        className="input focus:outline-none rounded-none"
                    />
                    <input className="btn bg-[#004e96] hover:bg-[#004e96] rounded-none text-white" type="submit" value="Search" />
                </form>
            </div>
            <div className="grid grid-cols-5 gap-5">
                {renderTableData()}
            </div>
        </div>
    );
};

export default AllToys;
