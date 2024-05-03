import Categories from "../Categories/Categories";
import Banner from "./Banner";
import CraftItem from "./CraftItem";
import CustomersSay from "./CustomersSay";
import OurGallery from "./OurGallery";


const Home = () => {
    return (
        <div >
            <div className="lg:mt-7 md:mt-7 mt-3">
                <Banner></Banner>
            </div>

            <div className="lg:my-20 my-10">
                <CraftItem></CraftItem>
            </div>

            <div className="lg:my-20 my-12">
                <Categories></Categories>
            </div>
            <div className="lg:my-20 my-12">
                <OurGallery></OurGallery>

            </div>
            <div className="lg:my-20 my-12">
                <CustomersSay></CustomersSay>

            </div>
        
            
        </div>
    );
};

export default Home;