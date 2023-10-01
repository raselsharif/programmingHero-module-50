import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";


const Root = () => {
    return (
        <div className="container mx-auto mt-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;