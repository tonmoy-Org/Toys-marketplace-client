import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Title from "../../hooks/Title";

const ToyDetails = () => {
    Title('Details')
    const toyDetails = useLoaderData();
    const { sellerName, email, toy_name, img, category, price, quantity, rating, description } = toyDetails;
    return (
        <div className="lg:p-20 my-16">
            <div className="card lg:card-side bg-base-100 shadow-xl lg:p-20 gap-24 lg:w-9/12 mx-auto">
                <div className="lg:mt-9">
                    <figure>
                        <img style={{ width: "300px", height: "300px" }} src={img} alt="Album" />
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title mb-0">Toy Name: {toy_name}</h2>
                    <label className="text-xl font-semibold"> Seller info:</label>
                    <p className="my-0">Name: {sellerName}</p>
                    <p className="my-0">Email: {email}</p>
                    <h2 className="card-title">Category: {category}</h2>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Description: {description}</p>
                    <p> <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    /></p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;