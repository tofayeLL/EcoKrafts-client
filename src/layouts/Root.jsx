import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import { RotatingLines } from "react-loader-spinner";


const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="container mx-auto lg:px-8 px-2">
            <div className="sticky top-0 z-50 mb-8">
                <Nav></Nav>
            </div>

            <div className="container mx-auto lg:px-16 md:px-16 px-2">
                {
                    navigation.state === "loading" ?

                        <div className="flex flex-col justify-center items-center">
                            <RotatingLines
                                visible={true}
                                height="100"
                                width="200"
                                color="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />

                        </div>

                        :
                        <Outlet></Outlet>
                }
            </div>





        </div>
    );
};

export default Root;