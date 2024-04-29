import Categories from "../Categories/Categories";
import Banner from "./Banner";
import CraftItem from "./CraftItem";


const Home = () => {
    return (
        <div className="space-y-20">
            <div >
                <Banner></Banner>
            </div>

            <div >
                <CraftItem></CraftItem>
            </div>

            <div>
                <Categories></Categories>
            </div>
        
            
        </div>
    );
};

export default Home;