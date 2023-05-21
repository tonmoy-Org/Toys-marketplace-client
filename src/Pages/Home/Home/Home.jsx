import Title from "../../../hooks/Title";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Explore from "../Exlpore/Explore";
import Gallery from "../Gallery/Gallery";
import Resources from "../Resources/Resources";
import TabSection from "../TabSection/TabSection";


const Home = () => {
    Title('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Explore></Explore>
            <TabSection></TabSection>
            <Resources></Resources>
            <Brands></Brands>
        </div>
    );
};

export default Home;