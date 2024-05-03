import Categories from "../Categories/Categories";
import Banner from "./Banner";
import CraftItem from "./CraftItem";
import CustomersSay from "./CustomersSay";
import OurGallery from "./OurGallery";


const Home = () => {
    return (
        <div >
            <div className="lg:my-6 my-4">
                <Banner></Banner>
            </div>

            <div className="my-20">
                <CraftItem></CraftItem>
            </div>

            <div className="my-20">
                <Categories></Categories>
            </div>
            <div className="my-20">
                <OurGallery></OurGallery>

            </div>
            <div className="my-20">
                <CustomersSay></CustomersSay>

            </div>
        
            
        </div>
    );
};

export default Home;