import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav";


const Root = () => {
    return (
        <div className="container mx-auto lg:px-8 px-2">
            <div className="sticky top-0 z-50 mb-8">
                <Nav></Nav>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;