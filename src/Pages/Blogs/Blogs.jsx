import Title from "../../hooks/Title";


const Blogs = () => {
    Title('Blogs')
    return (
        <div className="lg:p-20 mx-3">
            <div className="text-center mb-5">
                <h1 className="text-4xl  text-[#004e96] font-bold">Blogs</h1>
                <p className="py-4">Get peak performance out of your favorite models - Spektrum Smart Technology is <br /> about offering a higher connection to your hobby.</p>
            </div>
            <div className="border-dashed border-2 border-[#004e96] p-4">
                <h1 className="text-xl font-semibold">1. An access token and refresh token are commonly used in authentication and authorization mechanisms, particularly in the context of web applications and APIs. Heres an explanation of what they are and how they work?</h1>

                <p className="py-2">
                    Access Token:
                    An access token is a credential that is issued by an authentication server after a user successfully logs in or grants consent to an application. It represents the users authorization to access specific resources or perform certain actions. The access token is typically a string of characters that is included in the authorization header of API requests to authenticate the user.
                </p>

                <p className="py-2">
                    Refresh Token:
                    A refresh token is a long-lived credential that is also issued by the authentication server. It is used to obtain a new access token when the current one expires or becomes invalid. Refresh tokens have a longer lifespan compared to access tokens and are securely stored by the client-side application.
                </p>
            </div>
            <br />
            <div className="border-dashed border-2 border-[#004e96] p-4">
                <h1 className="text-xl font-semibold">2. Compare SQL and NoSQL databases?</h1>
                <p className="py-2">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
            </div>
            <br />
            <div className="border-dashed border-2 border-[#004e96] p-4">
                <h1 className="text-xl font-semibold">3. What is express js? What is Nest JS?</h1>
                <p className="py-2">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI</p>
            </div>
            <br />
            <div className="border-dashed border-2 border-[#004e96] p-4">
                <h1 className="text-xl font-semibold">What is MongoDB aggregate and how does it work?</h1>
                <p className="py-2">
                    What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </p>
            </div>
        </div>
    );
};

export default Blogs;