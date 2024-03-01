import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout = ()=>{
    return (
        <>
            <Header title={"Home"}/>
            <main id={"main-app-content"}><Outlet/></main>
            <Footer/>
        </>
    )
}

export default PageLayout;
